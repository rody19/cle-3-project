//je haalt de de data uit de json en toont dit op de pagina en vult een html element op de pagina1.
window.addEventListener('load', init);


let apiUrl = "http://localhost/cle-3-project/getInfoRody.php";
let info;
let sportData= {};
let detailDialog;
let detailContent;

function init(){
    info = document.getElementById('pagina1Info');
    info.addEventListener('click', sportClickHandler);

    //Retrieve modal elements, and add click event for closing modal
    detailDialog = document.getElementById('sport-detail');
    detailContent = detailDialog.querySelector('.modal-content');
    detailDialog.addEventListener('click', detailModalClickHandler);
    detailDialog.addEventListener('close', dialogCloseHandler);

    ajaxRequest(apiUrl, createSportCards);
    //console.log("http://localhost/cle-3-project/getInfoRody.php");
    //button = document.getElementById('load-pokemon');
    //button.addEventListener('click', getSport);
}


function ajaxRequest(url, successHandler)
{
    fetch(url)
        .then((response) => {
            console.log(response.status);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(ajaxErrorHandler);
}


function createSportCards(data)
{
    //Loop through the list of Pokémon
    for (let informatieSport of data) {
        //Wrapper element for every Pokémon card. We need the wrapper now, because adding it later
        //will result in Pokémon being ordered based on the load times of the API instead of chronically
        let sportCard = document.createElement('div');
        sportCard.classList.add('create-sport-card');
        sportCard.dataset.name = informatieSport.name;

        //Append Pokémon card to the actual HTML
        info.appendChild(sportCard);

        //Retrieve the detail information from the API
        // ajaxRequest(informatieSport.url, fillSportCards);
        fillSportCards(informatieSport);
    }
}

function fillSportCards(informatieSport)
{
    //Wrapper element for every Pokémon card
     let sportCard = document.querySelector(`.create-sport-card[data-name='${informatieSport.name}']`);

    //Element for the name of the Pokémon
    let title = document.createElement('h2');
    title.innerHTML = `${informatieSport.name} (#${informatieSport.id})`;
    sportCard.appendChild(title);

    //Element for the image of the Pokémon
    let image = document.createElement('img');
    image.src = informatieSport.img;
    sportCard.appendChild(image);

    //Element for the button to load the shiny version of the Pokémon
    let button = document.createElement('button');
    button.innerHTML = 'Show tekst';
    button.dataset.id = informatieSport.id;
    sportCard.appendChild(button);

    //Store Pokémon data globally for later use in other functions
    sportData[informatieSport.id] = informatieSport;
}

function sportClickHandler(e) {
    let clickedItem = e.target;

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    // TODO: ajax request to:
    // http://localhost/cle-3-project/getInfoRody.php?id=2
    // add succeshandler for ajax call

    fetch(url)
        .then((response) => {
            console.log(response.status);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(ajaxErrorHandler);



    //Get the information from the global stored data
    let informatieSport = sportData[clickedItem.dataset.id];

    //Reset the content
    detailContent.innerHTML = '';

    //Show the name we used on the main grid
    let title = document.createElement('h1');
    title.innerHTML = `${informatieSport.name} (#${informatieSport.id})`;
    detailContent.appendChild(title);

    //Display the text
    let tekst = document.createElement('p');
    tekst.innerHTML = getSportInformatie;
    detailContent.appendChild(tekst);

    //Open the modal
    detailDialog.showModal();
    info.classList.add('dialog-open');
}


/**
 * AJAX-call to retrieve data from a webservice
 *
 * @param data
 */
function ajaxErrorHandler(data)
{
    console.log(data);
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Er is helaas iets fout gegaan met de API, probeer het later opnieuw';
    info.before(error);
}

function detailModalClickHandler(e)
{
    if (e.target.nodeName === 'DIALOG' || e.target.nodeName === 'BUTTON') {
        detailDialog.close();
    }
}

/**
 * Close the underlying blur effect when dialog is closed (both on our own click or the native ESC key)
 *
 * @param e
 */
function dialogCloseHandler(e)
{
    info.classList.remove('dialog-open');
}

// function getSport() {
//     fetch(apiUrl)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             return response.json();
//         })
//         .then(getSportSuccessHandler)
//         .catch(getSportErrorHandler);
// }
//
// }
//
// /**
//  * Do something nice with the data you got from the external API
//  *
//  * @param data
//  */
// function getSportSuccessHandler(data) {
//     console.log(data);
// }
//
// /**
//  * Do something useful with the error you got back from the external API
//  *
//  * @param data
//  */
// function getSportErrorHandler(data) {
//     console.error(data);
// }
//
