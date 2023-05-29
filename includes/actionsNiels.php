<?php
/**
 * @return array
 */
function getBeperking()
{
    return [
        [
            "id" => 1,
            "name" => "Slechtziend",
            "beschrijving" => "Er zijn in nederland bijna 223.000 mensen slechtziend.",
            "img" => "./cle-3-project/includes/img/hr_logo_mini_cmyk_rood-ai.png",
        ],
        [
            "id" => 2,
            "name" => "Blind",
            "beschrijving" => "Dit houd in dat u minder dan 5% zicht heeft of dat uw gezichtsveld beperkt is tot minder dan 10 graden.",
            "img" => "cle-3-project/includes/img/hr_logo_mini_cmyk_rood-ai.png",
        ],
        [
            "id" => 3,
            "name" => "Oogziekten",
            "beschrijving" => "Er zijn verschillende soorten oogziekten. Een paar zijn: Glaucoom, Maculadegeneratie, CVI, Niet aangeboren hersenletsel.",
            "img" => "cle-3-project/includes/img/hr_logo_mini_cmyk_rood-ai.png",
        ],
        [
            "id" => 4,
            "name" => "Doofblind",
            "beschrijving" => "Doofblind is een combinatie van niet goed kunnen horen en niet goed kunnen zien. Zicht en gehoor kunnen ook geheel weggevallen zijn. Doofblindheid kan verschillende oorzaken hebben en kan op ieder moment ontstaan. Als u doofblind bent, ervaart u dit op uw eigen manier. ",
            "img" => "cle-3-project/includes/img/hr_logo_mini_cmyk_rood-ai.png",
        ]
    ];
}

/**
 * @param $id
 * @return beschrijving
 */
function getBeperkingDetails($id)
{
    $tags = [
        1 => [
            "name" => "Slechtziend",
            "beschrijving" => "Slechtziendheid houdt in dat u een lage gezichtsscherpte heeft, een verkleind gezichtsveld ervaart of overgevoelig bent voor licht. U ziet bjvoorbeeld donkere vlekken of u kunt alleen zien wat recht voor u staat. Bij de meeste slechtziende mensen verergeren de klachten of symptomen.",
        ],
        2 => [
            "name" => "blind",
            "beschrijving" => "Mogelijk ziet u nog wel verschil tussen licht en donker. Mogelijke oorzaken van blindheid zijn: aangeboren, erfelijke afwijking aan één oog of ogen, acite blindheid na een ongeval of val op het hoofd, Tijdelijke blindheid door shock of ziekte, Ouderdom",
        ],
        3 => [
            "name" => "Oogziekten",
            "beschrijving" => "U heeft een oogziekte. Welke oogziekten zijn er allemaal en wat voor symptomen horen daarbij? Een oogziekte kan aangeboren of erfelijk zijn, leeftijdgebonden zijn of samenhangen met een aandoening als diabetes. Ook kunnen de hersenen de oorzaak zijn als die de visuele informatie niet goed verwerken. Tot slot kan een ongeluk, val of Niet Aangeboren Hersenletsel (NAH) de oorzaak zijn.",
        ],
        4 => [
            "name" => "Doofblind",
            "beschrijving" => "Doofblindheid kan allerlei oorzaken hebben en kan op ieder moment ontstaan. U kunt een genetische oorzaak hebben. Een bekend voorbeeld is het syndroom van Usher. Een syndroom komt bij de geboorte tot uiting of pas later in het leven. U kunt ook doofblind raken door een trauma, ziekte of samenkomen van losstaande oorzaken.",
        ],
    ];
    return $tags[$id];
}
