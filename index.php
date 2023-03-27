<?php
//
//Require functions for actions
/*
require_once "includes/actions.php";

Based on the existence of the GET parameter, 1 of the 2 functions will be called
if (!isset($_GET['id'])) {
    $data = getDishes();
} else {
    $data = getDishDetails($_GET['id']);
}

Set the header & output JSON so the client will know what to expect.
header("Content-Type: application/json");
echo json_encode($data);
exit;
*/
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sporten met een visuele beperking!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="includes/style.css">
</head>
<body>
<?php include 'includes/nav.php' ?>

<img src="includes/img/banner.img" alt="banner foto temp.">
</body>
</html>