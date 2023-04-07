<?php
/**
 * @return array
 */
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "Pizza",
            "kitchen" => "Italian",
            "img" => "cle-3-project/includes/img/hr_logo_mini_cmyk_rood-ai.png",
        ],
        [
            "id" => 2,
            "name" => "Kale",
            "kitchen" => "Dutch",
            "img" => "cle-3-project/includes/img/hr_logo_mini_cmyk_rood-ai.png",
        ],
        [
            "id" => 3,
            "name" => "Lasagna",
            "kitchen" => "Italian",
            "img" => "cle-3-project/includes/img/hr_logo_mini_cmyk_rood-ai.png",
        ],
        [
            "id" => 4,
            "name" => "Kebab",
            "kitchen" => "Turkish",
            "img" => "cle-3-project/includes/img/hr_logo_mini_cmyk_rood-ai.png",
        ],
        [
            "id" => 5,
            "name" => "Paella",
            "kitchen" => "Spanish",
            "img" => "cle-3-project/includes/img/hr_logo_mini_cmyk_rood-ai.png",
        ]
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
            "name" => "Pizza",
            "recipe" => "Put it in the oven and go!",
            "tags" => ['cheese', 'oven']
        ],
        2 => [
            "name" => "Kale",
            "recipe" => "You can make this delicious Dutch meal by ...",
            "tags" => ['unox', 'healthy', 'stamppot', 'boerenkool']
        ],
        3 => [
            "name" => "Lasagne",
            "recipe" => "Very nice when your grandma prepares this meal",
            "tags" => ['omnomnom']
        ],
        4 => [
            "recipe" => "Everytime in the city after midnight",
            "tags" => ['kapsalon', 'tasty', 'meat']
        ],
        5 => [
            "recipe" => "Specialty when on holiday in Spain",
            "tags" => ['fish']
        ],
    ];

    return $tags[$id];
}