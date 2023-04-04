<!--hier maak je elementen die je gaat vullen met informatie uit actionsRody.php-->
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sporten met een visuele beperking!</title>

    <link rel="stylesheet" href="includes/style.css">
    <script type="text/javascript" src="includes/js/mainRody.js" defer></script>
</head>
<body>
<div id="sport-card"></div>
<?php include 'includes/nav.php' ?>
<h1 class="main-title">sporten met een visuele beperking</h1>
<section id="pagina1Info"></section>

<dialog class="modal" id="sport-detail">
    <div class="modal-content"></div>
    <button class="modal-close">❌</button>
    <form id="favoriteForm">
    <input type="submit" value="toevoegen⭐">
        <
    </form>
</dialog>

<div id="favoriet">
    <ul id="list"></ul>
</div>



</body>
</html>





