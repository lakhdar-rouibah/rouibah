<?php

include ("../search/connexion.php");
include ("main.php");
header('Access-Control-Allow-Origin: *');

if (isset ($_GET['demande'])){

	$demande      = $_GET['demande'];

}

if (isset ($_GET['nom']) and isset ($_GET['email']) and isset ($_GET['tel']) and isset ($_GET['message']) ){

	$nom          = $_GET['nom'];
	$email        = $_GET['email'];
	$tel          = $_GET['tel'];
	$message      = htmlentities($_GET['message'], ENT_QUOTES);

}

if (isset ($_GET['nom_shared']) and isset ($_GET['from'])and isset ($_GET['email_shared'])){
	
	$nom_shared   = $_GET['nom_shared'];
	$from   = $_GET['from'];
	$email_shared = $_GET['email_shared'];

}

if (isset ($_GET['tel_c'])){

	$tel_c        = $_GET['tel_c'];

}

if (isset ($_GET['p_code']) and isset ($_GET['m_code'])  ){

	$p_code       = $_GET['p_code'];
	$m_code       = $_GET['m_code'];

}

if (isset ($_GET['page'])  ){

	$page         = $_GET['page'];

}

$objet = new Main($server, $bdd, $user, $password);

switch ($demande) {

		// "contact"
	case "contact";
		$objet->contact($ip, $jour, $heure, $nom, $email, $tel, $message);
		break;

		// "shared"
	case "shared";
		$objet->shared($ip, $jour, $heure, $nom_shared, $from,  $email_shared);
		break;
		// "code"
	case "code";
		$objet->code($ip, $jour, $heure, $tel_c);
		break;
		// "verif_code"
	case "verif_code":
		$objet->verif_code($p_code, $m_code);
		break;
		// "visiteur"
	case "visiteur":
		$objet->visiteur($ip, $jour, $heure, $page);
		break;
}