<?php

/**
 * @return array
 */
function informatieSport()
{
    return [
        [
            "id" => 1,
            "name" => "Informatie visuele beperking",
            "informatie" => "",
            ""
        ],
        [
            "id" => 2,
            "name" => "soorten visuele beperking",
            "soorten" => "",
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getSportInformatie($id)
{
    $tags = [
        1 => [
            "visuele beperking" => "Mensen hebben verschillende zintuigen. De bekendste vijf zijn je ogen om te zien, oren om te horen, neus om te ruiken, tong om te proeven en je huid om te voelen. Via je zintuigen beleef je de wereld. Bij een zintuiglijke beperking werken één of meerdere zintuigen niet of minder goed. Meestal gaat het om een auditieve of visuele beperking. Iemand met een visuele beperking is blind of slechtziend. Een beperking aan je zintuigen kan een grote impact op je leven hebben. ",
            "tags" => ['info', 'visuele beperking']
        ],
        2 => [
            "soorten visuele beperking" => "Voorbeelden van visuele beperkingen
Kleurenblind - onder andere problemen met het onderscheiden van verschillen tussen kleuren zoals rood en groen, of tussen geel en blauw, en soms het ontbreken van kleurwaarneming
Slechtziend - onder andere onscherp zicht, kokervisie, verlies van het centrale zien en troebel zicht
Blind - substantieel, onherstelbaar verlies van zicht in beide ogen
Doofblind - substantieel, onherstelbaar visueel en auditief beperkt (iemand is zowel doof als blind)",
            "tags" => ['verschillende soorten']
        ],
    ];

    return $tags[$id];
}