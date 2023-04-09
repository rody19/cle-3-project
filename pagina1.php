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

<nav class="skew-menu">
    <ul>
        <li><a class ="ex2" href="index.php">Home</a></li>
        <li><a class ="ex2" href="pagina1.php">sporten</a></li>
        <li><a class ="ex2" href="pagina2.html">Sportclubs</a></li>
        <li><a class ="ex2" href="pagina3.php">Meer over ons</a></li>
        <li><a class ="ex2" href="pagina4.php">tips en tricks</a></li>
    </ul>
</nav>

<h1 class="main-title">sporten met een visuele beperking</h1>

<section id="pagina-1-Info">
    <div id="sport-card"></div>
</section>

<dialog class="modal" id="sport-detail">
    <div class="modal-content"></div>
    <button class="modal-close">❌</button>
    <form id="favoriteForm">
    <input type="submit" value="toevoegen⭐"/>
    </form>
</dialog>

<section id="favoriet">
    <div id="favoritelist">
    <ul id="list"></ul>
    </div>
</section



</body>
</html>





