<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sporten met een visuele beperking!</title>
    <!-- bulma geeft een conflict!
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">-->
    <link rel="stylesheet" href="includes/style.css">
    <script type="text/javascript" src="includes/js/mainNiels.js" defer></script>
</head>
<body>

<?php include 'includes/nav.php' ?>

<!--<img src="includes/img/banner.jpg" alt="banner foto temp.">-->

<section class="main">
    <h1>Sporten met een visuele beperking!</h1>

    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum interdum nisi in aliquam. In hac habitasse platea dictumst. Vivamus pretium massa velit, eu malesuada libero condimentum eu. Vivamus eleifend fermentum auctor. Integer commodo turpis ac eros porta molestie. In nec nisi sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse tortor urna, posuere sed elit sed, ultricies euismod quam. Nunc luctus rutrum quam venenatis semper. Pellentesque commodo hendrerit metus quis tristique. </p>
    <div id="sport-card"></div>
</section>
<section id="sport-gallery"></section>


<dialog class="modal" id="sport-card-detail">
    <div class="modal-content"></div>
    <button class="modal-close">❌</button>
    <form id="favoriteForm">
        <input type="submit" value="Toevoegen⭐"/>
    </form>
</dialog>

<section id="favoriet">
    <div id="favoritelist">
        <ul id="list"></ul>
    </div>
</section>

</body>
</html>