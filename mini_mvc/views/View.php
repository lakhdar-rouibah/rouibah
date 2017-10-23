<!DOCTYPE html>
<html>
<head>
	<title>Index</title>
</head>
<body>

	<h1>Le titre</h1>
<?php while ($row = $res->fetch(PDO::FETCH_ASSOC)) {

	echo $row['nom']."</br>";
	echo $row['message']."</br>";
	echo $row['jour']."</br>";
	echo $row['heure']."</br>";

}
?>
</body>
</html>