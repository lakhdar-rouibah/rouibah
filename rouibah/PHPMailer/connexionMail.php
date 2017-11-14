<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>





<?php

header('Content-Type: text/html; charset=utf-8');

$imap = "{imap-mail.outlook.com:993/imap/ssl}INBOX";
$user = "mathieu_camus@outlook.com";
$pass = "Azerty123456";

$mbox = imap_open($imap, $user, $pass);

$check = imap_mailboxmsginfo($mbox);

if ($check) {

	echo '<table>';
	echo "<tr><th> Nombre de message </th><th> ".$check->Nmsgs."</th></tr>";
	echo "<tr><th> Récent </th><th> ".$check->Recent."</th></tr>";
	echo "<tr><th> Non lu </th><th> ".$check->Unread."</th></tr>";
	echo "<tr><th> Effacé </th><th> ".$check->Deleted."</th></tr>";
	echo "<tr><th> Taille </th><th> ".$check->Size."</th></tr>";
	echo '</table>';

} else {
	echo "imap_mailboxmsginfo() a échoué : ".imap_last_error()."<br />\n";
}

imap_close($mbox);

?>

</body>
</html>