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
            "phone" => "010-4675647",
            "tags" => ['cheese', 'oven']
        ],
        2 => [
            "name" => "RIS (Rotterdamse Vereniging voor aangepast sporten)",
            "phone" => "06-45464161",
            "tags" => ['unox', 'healthy', 'stamppot', 'boerenkool']
        ],
        3 => [
            "name" => "RIS (Rotterdamse Vereniging voor aangepast sporten)",
            "phone" => "06-45464161",
            "tags" => ['kapsalon', 'tasty', 'meat']

        ],
        4 => [
            "name" => "Meander yoga",
            "phone" => "06-26937240",
            "tags" => ['omnomnom']
        ]
    ];

    return $tags[$id];
}
/**
 * @param $id
 * @return mixed
 */
