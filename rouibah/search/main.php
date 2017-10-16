<?php

// ==================== class Main qui gère
class Main {

	private $_pdo;

	//========================================== le constructeur pour la connexion a la bdd ===================
	public function __construct($server, $bdd, $user, $password) {

		try { $this->pdo = new PDO('mysql:host='.$server.';dbname='.$bdd, $user, $password);}
		 catch (Exception $e) {die('impossible de se connecter a la base de données ');}

	}

	// =================================== function red_image() =====================================
	private function red_image($width, $height, $rep_Dst, $img_Dst, $rep_Src, $img_Src) {

		$condition = 0;

		if ($rep_Dst == '') {$rep_Dst = $rep_Src;}
		if ($img_Dst == '') {$img_Dst = $img_Src;}
		if ($width == '') {$width     = 0;}
		if ($height == '') {$height   = 0;}

		if (file_exists($rep_Src.$img_Src) && ($width != 0 || $height != 0)) {

			$ExtfichierOK = '" jpg jpeg png"';

			$tabimage  = explode('.', $img_Src);
			$extension = $tabimage[sizeof($tabimage)-1];
			$extension = strtolower($extension);

			if (strpos($ExtfichierOK, $extension) != '') {

				$size  = getimagesize($rep_Src.$img_Src);
				$W_Src = $size[0];// largeur
				$H_Src = $size[1];// hauteur

				if ($width != 0 && $height != 0) {
					$ratiox    = $W_Src/$width;
					$ratioy    = $H_Src/$height;
					$ratio     = max($ratiox, $ratioy);
					$W         = $W_Src/$ratio;
					$H         = $H_Src/$ratio;
					$condition = ($W_Src > $W) || ($W_Src > $H);
				}

				if ($height != 0 && $width == 0) {
					$H         = $height;
					$W         = $H*($W_Src/$H_Src);
					$condition = $H_Src > $height;
				}

				if ($width != 0 && $height == 0) {
					$W         = $width;
					$H         = $W*($H_Src/$W_Src);
					$condition = $W_Src > $width;
				}

				if ($condition == 1) {

					switch ($extension) {
						case 'jpg':
						case 'jpeg':
							$Ress_Src = imagecreatefromjpeg($rep_Src.$img_Src);
							$Ress_Dst = ImageCreateTrueColor($W, $H);
							break;
						case 'png':
							$Ress_Src = imagecreatefrompng($rep_Src.$img_Src);
							$Ress_Dst = ImageCreateTrueColor($W, $H);

							imagesavealpha($Ress_Dst, true);
							$trans_color = imagecolorallocatealpha($Ress_Dst, 0, 0, 0, 127);
							imagefill($Ress_Dst, 0, 0, $trans_color);
							break;
					}

					ImageCopyResampled($Ress_Dst, $Ress_Src, 0, 0, 0, 0, $W, $H, $W_Src, $H_Src);

					switch ($extension) {
						case 'jpg':
						case 'jpeg':
							ImageJpeg($Ress_Dst, $rep_Dst.$img_Dst);
							break;
						case 'png':
							imagepng($Ress_Dst, $rep_Dst.$img_Dst);
							break;
					}

					imagedestroy($Ress_Src);
					imagedestroy($Ress_Dst);
				}
			}
		}

		if ($condition == 1 && file_exists($rep_Dst.$img_Dst)) {return true;} else {return false;}

		$this->pdo = null;

	}

	//============== function recuperer les message sur la bdd ======================================================
	public function reception_msg() {

		$resultats = $this->pdo->query("SELECT * FROM contact ORDER BY id DESC LIMIT 10");//query les message sur table contact
		$res       = $resultats->fetchAll();

		// =========  echo resultat en format json

		foreach ($res as $result) {
			$json[] = Array("ip" => utf8_encode($result['ip']), "jour" => utf8_encode($result['jour']), "heure" => utf8_encode($result['heure']), "nom" => utf8_encode($result['nom']), "email" => utf8_encode($result['email']), "tel" => utf8_encode($result['tel']), "message" => utf8_encode($result['message']));

		}

		echo json_encode($json);
		$this->pdo = null;

	}

	//============== function recuperer les blogs sur la bdd ======================================================
	public function reception_blog() {

		$resultats = $this->pdo->query("SELECT * FROM blog ORDER BY id DESC   ");//query les blogs sur table contact limit 5
		$result    = $resultats->fetchAll();

		// =========  echo resultat en format json
		header("Content-Type: application/json");
		$json = json_encode($result);
		echo $json;

		$this->pdo = null;

	}

	//============== function vérifier login sur la bdd ======================================================
	public function loging($pseudo, $pass) {
		$resultats = $this->pdo->query("SELECT * FROM membres WHERE  pseudo='".$pseudo."' AND password= '".$pass."'");
		$result    = $resultats->fetchAll();

		if ($result) {// si le resultet existe

			// =========  echo "rep" ===> "ok" en format json
			$valeur  = "ok";
			$reponse = Array("rep" => $valeur);
			header("Content-Type: application/json");
			echo json_encode($reponse);
		} else {//si non

			// =========  echo "rep" ===> "non" en format json
			$valeur  = "non";
			$reponse = Array("rep" => $valeur);
			header("Content-Type: application/json");
			echo json_encode($reponse);
		}

		$this->pdo = null;

	}

	//============== function inserer le message sur la bdd ======================================================
	public function contact($ip, $jour, $heure, $nom, $email, $tel, $message) {

		$req = $this->pdo->exec("INSERT INTO contact (id, ip, jour, heure, nom, email, tel, message) VALUES ('','".$ip."','".$jour."', '".$heure."', '".$nom."', '".$email."', '".$tel."', '".$message."')") or die('impossible de saisir la table');// executer la requette on inserant les valeur de massage "ip", "jour", "heure", "nom", "email", "tel", "message"

		if ($req) {// si la requette passe bien

			// =========  echo "rep" ===> "ok" en format json
			$valeur  = "ok";
			$reponse = Array("rep" => $valeur);
			header("Content-Type: application/json");
			echo json_encode($reponse);
		} else {// si non

			// =========  echo "rep" ===> "non" en format json
			$valeur  = "non";
			$reponse = Array("rep" => $valeur);
			header("Content-Type: application/json");
			echo json_encode($reponse);
		}

		$this->pdo = null;

	}

	//============== function inserer le blog sur la bdd ======================================================
	public function blog($title, $descr, $file, $jour) {

		$resultats = $this->pdo->query("SELECT * FROM blog ORDER BY id DESC ") or die('impossible de se connecter la table blog');// query le nom de la dernière image poster
		$result    = $resultats->fetch();

		$result['image'];// recuperer le nom d'omage

		$dir = "img_up/";// direction du dossier ou l'image seras uploader

		if (!file_exists($dir)) {// si le dossier "img_up/" existe pas

			mkdir($dir, 0777, true);//on vas créer le dossier "img_up/"
		}

		$target_dir = $dir."/".basename($file["name"]);// on fixe le nom de la composante finale d'un chemin

		if ($result['image']) {// si le nom d'une image existe
			$name = $result['image']+1;// on recupere le nom qui est en int et on ajoute 1

		} else {// si non

			$name = 1;//le nom prendra la valeur 1
		}
		$extension = ".jpg";//on declare l'extension

		if (move_uploaded_file($file["tmp_name"], $dir."".$name."".$extension)) {// si l'image uploaded sur le dossier "img_up"

			// echo en format json  "Message" => "la photo "direction nom et extension" a était uploaded " et son status "ok"
			echo json_encode([
					"Message" => "la photo ".$dir."".$name."".$extension." a était uploaded.",
					"Status"  => "OK",

				]);

			$req = $this->pdo->exec("INSERT INTO blog (id, image, title, descr, jour) VALUES ('','".$name."',' ".$title."','".$descr."', '".$jour."')") or die('impossible de saisir la table');// on sauvegarde nom de l'image, title, descr, jour

		} else {//si non

			// echo en format json  "Message" => "pb! image n'a pas pue etre uploader." et son status "error"
			echo json_encode([
					"Message" => "pb! image n'a pas pue etre uploader.",
					"Status"  => "Error",

				]);

		}

		$width   = "128";// on donne le width de l'image
		$height  = "128";// on donne le height de l'image
		$rep_Dst = "img/";
		$img_Dst = $name.".jpg";// la destination nom et extension
		$rep_Src = $dir;// la directory ou on cherche l'image
		$img_Src = $name.".jpg";// le nom et l'extension de l'image a chercher

		// on appelle la function red_image() qui redimensionne l'image
		$this->red_image($width, $height, $rep_Dst, $img_Dst, $rep_Src, $img_Src);

	}

}