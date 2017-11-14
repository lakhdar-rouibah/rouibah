<?php

require ('fpdf/fpdf.php');

$nom_ent = "nom ent";
$adresse = "adresse de l'entreprise";
$cp      = "CP Ville";

//====================================================creation une nouvelle page pdf
$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial', '', 10);

$pdf->SetFillColor(0, 0, 0);
$pdf->Rect(10, 10, 190, 5, "F");

//============================ mes coordonnées
$pdf->SetXY(15, 40);
$pdf->SetFont('Times', '', 12);
$pdf->MultiCell(80, 5, utf8_decode("Lakhdar Rouibah\n104 rue de la Papeterie\n91100 Corbeil Essonnes\nTél : 06.51.29.44.48.\nE-mail : lakhdar-rouibah@live.fr"));

//=========================== coordonées de l'entrprise
$pdf->SetXY(140, 50);
$pdf->SetFont('Times', '', 12);
$pdf->MultiCell(80, 5, utf8_decode($nom_ent."\n".$adresse."\n".$cp));

//=========================== objet
$pdf->SetXY(15, 90);
$pdf->SetFont('Times', 'b', 12);
$pdf->MultiCell(80, 5, utf8_decode("Objet : "));
$pdf->SetXY(30, 90);
$pdf->SetFont('Times', '', 12);
$pdf->MultiCell(80, 5, utf8_decode("Demande de stage Développeur logiciel."));

//========================== lettre

$pdf->SetXY(15, 100);
$pdf->SetFont('Times', '', 12);
$pdf->MultiCell(180, 5, utf8_decode("     Madame, Monsieur,\n
Suite à ma recherche de stage , je désire par la présente vous soumettre ma candidature au poste de stage développeur de logiciel.\n
Passionné d'internet et de graphisme, j'ai orienté mes études pour l'obtention des diplômes, qui me permettent aujourd'hui de comprendre tous les langages informatiques, que ce soit html, JavaScript, PHP et autres. Conscient de l'évolution rapide des technologies dans ce domaine, j'effectue régulièrement des formations afin de me tenir informé des dernières évolutions.\n
Créatif et rigoureux, je suis capable d'établir un cahier des charges et de le respecter. Ma personnalité enjouée, me permet d'intégrer aisément une équipe et de motiver cette dernière, mais je suis également capable de travailler seul.\n
Persuadé que mes compétences et mon savoir-faire seraient un plus pour votre entreprise, je me tiens à votre disposition pour vous rencontrer afin d'élaborer ensemble une base de travail fructueux, qui ne pourra qu'être bénéfique pour les deux parties.\n
Dans l'attente de cette rencontre, recevez, Madame, Monsieur, mes sincères salutations.
"));

//=======================================================================================selectioner base de donnees pieces

$pdf->SetXY(130, 230);
$pdf->MultiCell(50, 2, "Lakhdar Rouibah", 0, "R");

$pdf->Image('logo.png', 160, 245, 10, 10);

$pdf->SetFillColor(0, 0, 0);
$pdf->Rect(10, 280, 190, 5, "F");

$pdf->Output("f");

header('Location:doc.pdf');

?>