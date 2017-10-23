<?php

// Les classes
class Model {

	private $_ip;

	public function __construct($server, $user, $password, $bdd, $ip) {

		try { $this->pdo = new PDO('mysql:host='.$server.';dbname='.$bdd, $user, $password);}
		 catch (Exception $e) {die('impossible de se connecter a la base de données ');}

		echo "class model est initialiser";
	}

	public function reqContact($table) {

		$sql = "SELECT * FROM  ".$table." ORDER BY id DESC";
		$req = $this->pdo->prepare($sql);
		$req->execute() or die('impossible de se connecter a la table');

		return $req;

	}

}