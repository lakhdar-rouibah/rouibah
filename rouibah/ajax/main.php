<?php

class Main {

	public function __construct($server, $bdd, $user, $password) {

		try { $this->pdo = new PDO('mysql:host='.$server.';dbname='.$bdd, $user, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));}
		 catch (Exception $e) {die('impossible de se connecter a la base de données ');}

	}

	//======================================================================================================================================

	public function contact($ip, $jour, $heure, $nom, $email, $tel, $message) {

		$subject = "Confirmation de rouibah.fr";
		$msg     = "Bonjour ".$nom."\nJe vous confirme que j'ai bien reçus votre message et je vous reponds dans les plus brefs délais";

		$headers = 'From: lakhdar@rouibah.fr' ."\r\n".
     'Reply-To: lakhdar@rouibah.fr' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();

		if ($nom != null and $email != null and $tel != null and $message != null) {

			$req_contact = $this->pdo->exec("INSERT INTO contact (id, ip, jour, heure, nom, email, tel, message) VALUES ('','".$ip."','".$jour."', '".$heure."', '".$nom."', '".$email."', '".$tel."', '".$message."')") or die('impossible de saisir la table');

			if ($req_contact) {

				echo ("ok");
				$this->pdo = null;

				mail($email, $subject, $msg, $headers);

			} else {

				echo ("non");
				$this->pdo = null;

			}

		}
	}

	//======================================================================================================================================

	public function shared($ip, $jour, $heure, $nom_shared, $from, $email_shared) {

		$subject = "je vous invite a regarder ce profil";
		$message = "bonjour \nC'est moi ".$nom_shared." je vous invite à regarder ce profil de http://www.rouibah.fr";
		$headers = 'From: '.$from.''."\r\n".'Reply-To: '.$from.''."\r\n".'X-Mailer: PHP/'.phpversion();

		if ($nom_shared != null and $email_shared != null) {

			$req_shared = $this->pdo->exec("INSERT INTO shared (id, ip, jour, heure, nom, email) VALUES ('','".$ip."','".$jour."', '".$heure."', '".$nom_shared."', '".$email_shared."')") or die('impossible de saisir la table');

			if ($req_shared) {

				echo ("ok");
				$this->pdo = null;

				mail($email_shared, $subject, $message, $headers);

			} else {

				echo ("non");
				$this->pdo = null;

			}

		}
	}

	//======================================================================================================================================

	public function code($ip, $jour, $heure, $tel_c) {

		if ($tel_c != null) {

			$code = rand(10000, 99999);

			$req_tel = $this->pdo->exec("INSERT INTO code (id, ip, jour, heure, tel, g_code) VALUES ('','".$ip."','".$jour."', '".$heure."', '".$tel_c."', '".$code."')") or die('impossible de saisir la table');

			if ($req_tel) {

				echo ("ok");
				$gammu     = exec("echo 'rouibah.fr \n le code est : ".$code."' | gammu-smsd-inject TEXT '".$tel_c."'");
				$this->pdo = null;

			} else {

				echo ("non");
				$this->pdo = null;

			}

		}
	}

	//======================================================================================================================================

	public function verif_code($p_code, $m_code) {

		if ($p_code != null && $m_code != null) {

			$req_code = $this->pdo->query("SELECT * FROM code WHERE g_code = '".$m_code."' AND tel = '".$p_code."'") or die('impossible de saisir la table');
			$result   = $req_code->fetch(PDO::FETCH_OBJ);

			if ($result) {

				echo ("ok");
				$this->pdo = null;

			} else {

				echo ("non");
				$this->pdo = null;

			}

		}

	}

	//======================================================================================================================================

	public function visiteur($ip, $jour, $heure, $page) {

		if ($page != null) {

			$req_page = $this->pdo->exec("INSERT INTO visiteurs (id, ip, jour, heure, page) VALUES ('','".$ip."','".$jour."', '".$heure."', '".$page."')") or die('impossible de saisir la table');

			if ($req_page) {

				echo ("ok");

			} else {

				echo ("non");

			}

		}

	}

}