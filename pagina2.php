<!--hier komt de informatie uit de actionsSam. -->
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="includes/styles.css">
    <script type="text/javascript" src="includes/js/mainSam.js" defer></script>
    <title>Sportclubs</title>
</head>

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


<section class="main">
    <h1>Sportscholen voor mensen met een visuele beperking</h1>
    <div id="sport-card"></div>
</section>
<section id="sport-gallery"></section>

<section id="favourite-list">
    <div id="todolist">
        <h1><i class="fas fa-clipboard-list"></i> Todo List</h1>
        <form id="todo-form">
            <input type="text" placeholder="todo item" name="todo" id="todo-field"/>
            <input type="submit" value="Toevoegen"/>
        </form>
        <ul id="list"></ul>
    </div>
</section>

<dialog class="modal" id="sport-card-detail">
    <div class="modal-content"></div>
    <button class="modal-close">❌</button>
</dialog>

>

</body>
</html>