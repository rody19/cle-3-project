

<?php
//informatie uit actionrody.php halen en vertalen naar bruikbare json.
require_once "includes/actionsRody.php";

//Based on the existence of the GET parameter, 1 of the 2 functions will be called
//Deze codeheeft als doel om informatie op te halen uit "actionsRody.php" en deze om te zetten naar een JSON-formaat dat kan worden gebruikt om gegevens tussen een server en een website te versturen.
if (!isset($_GET['id'])) {
    $data = informatieSport();
} else {
    $data = getSportInformatie($_GET['id']);
}

//Set the header & output JSON so the client will know what to expect.
header("Content-Type: application/json");
echo json_encode($data);

exit;
?>