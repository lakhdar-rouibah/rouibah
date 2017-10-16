<?php

include ("connexion.php");
include ("main.php");


if (isset ($_POST['demande'])){

     $demande = $_POST["demande"];
}

if (isset ($_POST['pseudo']) and isset ($_POST['pass'])){

	$pseudo = htmlentities($_POST["pseudo"], ENT_QUOTES);
	$pass   = htmlentities($_POST["pass"], ENT_QUOTES);

}


if (isset ($_POST['nom']) and isset ($_POST['email'])and isset ($_POST['tel'])and isset ($_POST['message'])){
		
	$nom     = htmlentities($_POST["nom"], ENT_QUOTES);
	$email   = htmlentities($_POST["email"], ENT_QUOTES);
	$tel     = htmlentities($_POST["tel"], ENT_QUOTES);
	$message = htmlentities($_POST["message"], ENT_QUOTES);
}


if (isset ($_POST['title']) and isset ($_POST['descr'])and isset ($_FILES['file'])){
	
	$title = htmlentities($_POST["title"], ENT_QUOTES);
	$descr = htmlentities($_POST['descr'], ENT_QUOTES);
	$file  = $_FILES["file"];
}
$objet = new Main($server, $bdd, $user, $password);

switch ($demande) {

		// "message" ===> utiliser par messageViewController
	case "message":
		$objet->reception_msg();
		break;
		// "blog" ===> utiliser par logViewController
	case "blog":
		$objet->reception_blog();
		break;
		// "login" ===> utiliser par loginViewController
	case "login":
		$objet->loging($pseudo, $pass);
		break;
		// "insertContact" ===> utiliser par contactViewController
	case "insertContact":
		$objet->contact($ip, $jour, $heure, $nom, $email, $tel, $message);
		break;
		// "insertBlog" ===> utiliser par saisieBlogViewController
	case "insertBlog":
		$objet->blog($title, $descr, $file, $jour);
		break;

}
