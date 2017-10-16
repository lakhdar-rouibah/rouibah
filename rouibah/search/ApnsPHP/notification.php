<?php

include ("../connexion.php");
include ("apns.php");


if (isset ($_POST['demande'])){
	
	$demande = $_POST["demande"];
}

if (isset ($_POST['badgeValue'])){
	
	$badgeValue = $_POST["badgeValue"];
}

if (isset ($_POST['token'])){
	
	$token      = $_POST["token"];
}

if (isset ($_POST['title'])){
	
	$title   = $_POST["title"];

}

if (isset ($_POST['message'])){
	
	$message = $_POST["message"];
}

$objet = new Main($server, $bdd, $user, $password);

switch ($demande) {

		// "message" ===> utiliser par apnsViewController
	case "apns";
		$objet->apns($message, $jour, $title);
		break;

		// "etat" ======> utiliser par le viewController
	case "etat";
		$objet->etat_badge($token);
		break;
		// "zero" ======>utiliser par la notificationViewController
	case "zero";
		$objet->zero_badge($token, $badgeValue);
		break;
		// "token" ======>utiliser par la appDelegate
	case "token":
		$objet->token($jour, $heure, $token);
		break;
}