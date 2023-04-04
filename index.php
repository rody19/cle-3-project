<?php
$info = file_get_contents("includes/actionsSam.php");

$infoJson = json_decode($info);
//?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sporten met een visuele beperking</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="includes/styles.css">
</head>
<style>
    a.ex2:hover, a.ex2:active {font-size: 150%;}
    a.ex2:hover, a.ex2:active {background: yellow;}
</style>
<body>
<nav class="skew-menu">
    <ul>
        <li><a class ="ex2" href="index.php">Home</a></li>
        <li><a class ="ex2" href="pagina1.php">Tips/Tricks</a></li>
        <li><a class ="ex2" href="pagina2.php">Sportclubs</a></li>
        <li><a class ="ex2" href="pagina3.php">Meer over ons</a></li>
        <li><a class ="ex2" href="pagina4.php">Onze ervaring</a></li>
    </ul>
</nav>
</body>
</html>
