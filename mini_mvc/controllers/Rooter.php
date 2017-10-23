

<?php

class Router {

	private $_loaderModel;

	private $_server;
	private $_user;
	private $_password;
	private $_bdd;
	private $_ip;

	public function __construct($server, $user, $password, $bdd, $ip) {

		$this->_server   = $server;
		$this->_user     = $user;
		$this->_password = $password;
		$this->_bdd      = $bdd;
		$this->_ip       = $ip;

	}

	// Chargement des classes Model
	public function loaderModel() {

		// Function  __autoload pour charger les classes
		function __autoload($classModel) {
			$filename = "models/".$classModel.".php";
			require_once ($filename);

		}
	}

	public function objModel() {

		// Initialiser function loaderModel()
		$this->_loaderModel = $this->loaderModel();

		// Initialiser les classs
		$obj1 = new Main();
		$obj2 = new Model($this->_server, $this->_user, $this->_password, $this->_bdd, $this->_ip);
		$res  = $obj2->reqContact(" contact ");
		require ("views/View.php");
	}

}