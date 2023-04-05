<?php
/**
 * @return array
 */
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "Active Sports Premium Club",
            "location" => "Van Maanenstraat 8 3038 CZ Rotterdam",
            "phone" => "010-4675647",
            "time" => "06:00 - 21:30",
            "img" => "includes/img/activesports.jpg",
        ],
        [
            "id" => 2,
            "name" => "RIS (Rotterdamse Vereniging voor aangepast sporten)",
            "location" => "Locatie: Westersingel 300 3015 LJ Rotterdam",
            "phone" => "06-45464161",
            "time" => "19:30 - 20:30",
            "img" => "includes/img/ris.jpg",
        ],
        [
            "id" => 3,
            "name" => "RIS (Rotterdamse Vereniging voor aangepast sporten)",
            "location" => "Melanchtonweg 70 3052 KV Rotterdam",
            "phone" => "06-45464161",
            "time" => "18:00 - 19:30",
            "img" => "includes/img/ris.jpg",
        ],
        [
            "id" => 4,
            "name" => "Meander yoga",
            "location" => "Bergselaan 144 3037 CG Rotterdam",
            "phone" => "06-26937240",
            "time" => "18:45 - 20:00",
            "img" => "includes/img/meander.jpg",
        ],

    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDishDetails($id)
{
    $tags = [
        1 => [
            "name" => "Active Sports Premium Club",
            "location" => "Locatie: Van Maanenstraat 8 3038 CZ Rotterdam",
            "phone" => "Telefoon: 010-4675647",
            "time" => "Openingstijd: 06:00 - 21:30",
        ],
        2 => [
            "name" => "RIS Fitness",
            "location" => "Locatie: Westersingel 300 3015 LJ Rotterdam",
            "phone" => "Telefoon: 06-45464161",
            "time" => "Openingstijd: 19:30 - 20:30",
        ],
        3 => [
            "name" => "RIS Medisch Fitness",
            "location" => "Locatie: Melanchtonweg 70 3052 KV Rotterdam",
            "phone" => "Telefoon: 06-45464161",
            "time" => "Openingstijd: 18:00 - 19:30",

        ],
        4 => [
            "name" => "Meander yoga",
            "location" => "Locatie: Bergselaan 144 3037 CG Rotterdam",
            "phone" => "telefoon: 06-26937240",
            "time" => "Openingstijd: 18:45 - 20:00",
        ]
    ];

    return $tags[$id];
}
/**
 * @param $id
 * @return mixed
 */
