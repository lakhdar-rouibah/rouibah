<?php

require ("controllers/Rooter.php");
require ("config/connexion.php");

$objetModel = new Router($server, $user, $password, $bdd, $ip);
$objetModel->objModel();
