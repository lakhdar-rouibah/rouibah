<?php

// class main pour gere las apns =====> Apple Push Notification Service =====================================
class Main {

	private $_pdo;

	//========================================== le constructeur pour la connexion a la bdd
	public function __construct($server, $bdd, $user, $password) {

		try { $this->pdo = new PDO('mysql:host='.$server.';dbname='.$bdd, $user, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));}
		 catch (Exception $e) {die('impossible de se connecter a la base de données ');}

	}

	//========================================= function send_ios_notification() envoie push notification ================================

	private function send_ios_notification($deviceToken, $message, $badge, $jour, $title) {// paramètre "$deviceToken", "$message", "$badge", "$jour", "$title"

		$passphrase = 'habiuor29';// mot de passe pour certificat ck.pm

		$ctx = stream_context_create();// creation du context ctx

		stream_context_set_option($ctx, 'ssl', 'local_cert', 'ck.pem');// declarer certificat ck.pm
		stream_context_set_option($ctx, 'ssl', 'passphrase', $passphrase);// set option mot de passe pour ck.pm

		// Ouvrir connexion  APNS serveur push.apple
		$fp = stream_socket_client('ssl://gateway.sandbox.push.apple.com:2195', $err, $errstr, 60, STREAM_CLIENT_CONNECT|STREAM_CLIENT_PERSISTENT, $ctx);
		if (!$fp) {
			exit("Connexion echoué: $err $errstr" .PHP_EOL);
		}

		// le body aps
		$body["aps"] = array(
			"badge" => $badge,
			"alert" => $message,
			"sound" => "default",
		);

		// Encoder payload en JSON
		$payload = json_encode($body);

		//var_dump($payload);

		// Construire la notification
		$msg = chr(0).pack('n', 32).pack('H*', trim($deviceToken)).pack('n', strlen($payload)).$payload;

		// envoyer au serveur
		$result = fwrite($fp, $msg, strlen($msg));

		$rep = "oui";

		//sauvegarder  la notification sur la bdd pour la recuperer ensuite par notificationViewController ====> regarder partie valeur badge paraport token dessous
		$req = $this->pdo->exec("INSERT INTO notification (id, jour, title, noti, rep) VALUES ('','".$jour."', '".$title."', '".$message."', '".$rep."')") or die('impossible de saisir la table');

		if ($req) {// si la requette passe bien

			// on affiche un array rep => Token inserer avec succes en format json
			$valeur  = "ok";
			$reponse = Array("rep" => $valeur);
			header("Content-Type: application/json");
			echo json_encode($reponse);

		} else {// si non

			// on affiche un array rep => Probleme d'insertion token en format json
			$valeur  = "non";
			$reponse = Array("rep" => $valeur);
			header("Content-Type: application/json");
			echo json_encode($reponse);
		}

		$this->pdo = null;

		if (!$result) {
			//var_dump pour resultat
			var_dump($result);
		} else {

			return $result;

			var_dump($result);
		}
		// Fermer la connexion avec serveur
		fclose($fp);

	}

	// ==================================== function update_badge suite au token ===================================
	private function update_badge($badge, $deviceToken, $message, $jour, $title) {// paramètre "badge", "deviceToken" "message", "jour", "title"

		$sql = "update number_badge set badge = '".$badge."' WHERE token = '".$deviceToken."' ";// sql update number_badge paraport deviceTokebn

		$req = $this->pdo->exec($sql);//execute sql

		$this->send_ios_notification($deviceToken, $message, $badge, $jour, $title);//envoie ver send_ios_notification

	}

	// ========================================== function number_badge qui gère la valeur de badge ========================================
	private function number_badge($deviceToken, $message, $jour, $title) {// paramètre "deviceToken", message", "jour", "title"

		$resultats = $this->pdo->query("SELECT * FROM number_badge WHERE  token='".$deviceToken."' ") or die('impossible de saisir la table');// query la valeur de badge paraport au token

		$result_num = $resultats->fetchAll(PDO::FETCH_ASSOC);

		if ($result_num) {// si query existe

			foreach ($result_num as $row) {
				$number_badge = $row["badge"];// on recupèere la valeur de badge
				$badge        = $number_badge+1;// on ajoute 1
				$this->update_badge($badge, $deviceToken, $message, $jour, $title);// on envoie vers function update_badge
			}

		} else {//si non

			$badge = 1;// le badge = 1
			$this->send_ios_notification($deviceToken, $message, $badge, $jour, $title);// on envoie vers function send_ios_notification
			$req = $this->pdo->exec("INSERT INTO number_badge (id, token, badge) VALUES ('','".$deviceToken."', '".$badge."')") or die('impossible de saisir la table');// et on insert la valeur badge suite au deviceToken
		}

	}

	// ============================================= function "apns" qui gère l'envoie des push notification ====================
	public function apns($message, $jour, $title) {// envoie de push notification paramètre "message", "jour", "title"

		$resultats = $this->pdo->query("SELECT * FROM token_table ");// selectionner touts les token sur la bdd

		while ($result_token = $resultats->fetch()) {
			$deviceToken = $result_token["token"];
			$this->number_badge($deviceToken, $message, $jour, $title);// appeler la fonction number_badge
		}

	}

	//======================================================= valeur badge paraport token =============================================

	public function etat_badge($token) {// verification valeur badge, ==> paramètre "token" envoyer par l'application

		$resultats  = $this->pdo->query("SELECT * from number_badge WHERE token = '".$token."'");// query valeur badge
		$result_num = $resultats->fetchAll();

		foreach ($result_num as $row) {

			$number_badge = $row["badge"];// définir valeur badge

			// encoder et echo valeur page en json
			$reponse = Array("rep" => $number_badge);
			header("Content-Type: application/json");
			echo json_encode($reponse);
		}

		$this->pdo = null;

	}

	// =========== initialiser valeur badge a zero et afficher les notification si la valeur de badge est defirent de  zero ==========
	public function zero_badge($token, $badgeValue) {// initialiser valeur badge a zero

		$zero    = 0;
		$res     = $this->pdo->query("SELECT * from number_badge WHERE token = '".$token."'");// query valeur badge sur le token
		$res_num = $res->fetchAll();

		foreach ($res_num as $row) {

			$num_badge = $row["badge"];// définir valeur badge

			if ($num_badge != 0) {// si le badge est défferent de zero

				$sql = "UPDATE number_badge SET badge = '".$zero."' WHERE token = '".$token."' ";
				$req = $this->pdo->exec($sql) or die('impossible de saisir la table update');// mettre la valeur badge a zero

				$resultats = $this->pdo->query("SELECT * FROM notification ORDER BY id DESC LIMIT ".$badgeValue."") or die('impossible d afficher le resultat');// query les notification limit badge valeur envoyer par l'application
				$result    = $resultats->fetchAll();

				//encoder et echo valeur notification en json
				header("Content-Type: application/json");
				$json = json_encode($result);

				echo $json;

				$this->pdo = null;

			} else {// si la valeur = zero

				// echo un array reponse "rep" = non
				$valeur    = "non";
				$reponse[] = Array("rep" => $valeur, "0" => $valeur);
				header("Content-Type: application/json");
				echo json_encode($reponse);

				$this->pdo = null;

			}

		}

	}

	// ===================== function token qui gere l'enregistrement des token sur la bdd =======================================
	public function token($jour, $heure, $token) {//paramètre "$jour", "$heure", "$token"

		$resultats = $this->pdo->query("SELECT * FROM token_table WHERE  token='".$token."'");//query le token
		$result    = $resultats->fetchAll();

		if ($result) {// si le token existe

			// on affiche un array rep => Token déja disponible en format json
			$valeur  = "Token déja disponible";
			$reponse = Array("rep" => $valeur);
			header("Content-Type: application/json");
			echo json_encode($reponse);

			$this->pdo = null;

		} else {//si non

			$req = $this->pdo->exec("INSERT INTO token_table (id,jour, heure, token) VALUES ('','".$jour."', '".$heure."', '".$token."')") or die('impossible de saisir la table');// on sauvgarde le token sur la bdd

			if ($req) {// si la requette passe bien

				// on affiche un array rep => Token inserer avec succes en format json
				$valeur  = "Token inserer avec succes";
				$reponse = Array("rep" => $valeur);
				header("Content-Type: application/json");
				echo json_encode($reponse);

			} else {// si non

				// on affiche un array rep => Probleme d'insertion token en format json
				$valeur  = "Probleme d'insertion token";
				$reponse = Array("rep" => $valeur);
				header("Content-Type: application/json");
				echo json_encode($reponse);
			}

			$this->pdo = null;

		}

	}

}