<?php

ini_set('display_errors', 1);

require '_lib/class.phpmailer.php';

$message = "un message de test";
$from    = "lakhdar@rouibah.fr";
$to      = "lakhdar-rouibah@live.fr";

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth  = true;
$mail->SMTPDebug = 0;
$mail->isHTML(true);
$mail->Host       = 'SSL0.OVH.NET';
$mail->Username   = "lakhdar@rouibah.fr";
$mail->Password   = "habiuor29";
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;

$mail->CharSet = 'UTF-8';
$mail->From    = $from;
$mail->addAddress($to);
$mail->FromName = 'Nom Prénom';
$mail->Subject  = 'MON SUJET';
$mail->Body     = $message;
$mail->AddCustomHeader("Return-receipt-to:".$from);
$mail->addCustomHeader("Disposition-Notification-To: ".$from);
//$mail->AddAttachment("fichier".$_FILES[fichier]['name']);

if (!$mail->send()) {
	echo 'Mailer Error: '.$mail->ErrorInfo;

} else {
	echo 'Message sent!';
}