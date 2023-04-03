window.addEventListener('load', init);

//Globals
let apiUrl = "https://localhost/cle-3-project/getinfoNiels.php";
let sportData = {};
let gallery;
let detailDialog;
let detailContent;


function init(){

    //Start the application with loading the API data
    ajaxRequest(apiUrl, createSportCards);
    gallery = document.getElementById('sport-gallery');
    gallery.addEventListener('click', sportClickHandler);

}
/**
 * AJAX-call to retrieve data from a webservice
 *
 * @param url
 * @param successHandler
 */
function ajaxRequest(url, successHandler)
{
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(ajaxErrorHandler);
}
/**
 * Create initial Pokémon cards based on initial API data
 *
 * @param data
 */
function createSportCards(data)
{
    //Loop through the list of Pokémon
    for (let getDishes of data) {
        //Wrapper element for every Pokémon card. We need the wrapper now, because adding it later
        //will result in Pokémon being ordered based on the load times of the API instead of chronically
        let sportCard = document.createElement('div');
        sportCard.classList.add('create-sport-card');
        sportCard.dataset.name = sportCard.name;

        //Append Pokémon card to the actual HTML
        gallery.appendChild(sportCard);

        //Retrieve the detail information from the API
        //ajaxRequest(getDishes.url, fillSportCard);
        fillSportCard(getDishes);

    }
}
/**
 * Create the actual contents of the card based on the loaded API information
 *
 * @param getDishes
 */
function fillSportCard(getDishes)
{
    //Wrapper element for every Pokémon card
    let sportCard = document.querySelector(`.create-sport-card[data-name='${getDishes.name}']`);

    //Element for the name of the Pokémon
    let title = document.createElement('h2');
    title.innerHTML = `${getDishes.name} (#${getDishes.id})`;
    sportCard.appendChild(title);

    //Element for the image of the Pokémon
    let image = document.createElement('img');
    image.src = getDishes.img;
    sportCard.appendChild(image);

    //Element for the button to load the shiny version of the Pokémon
    let button = document.createElement('button');
    button.innerHTML = 'Show shiny';
    button.dataset.id = getDishes.id;
    getDishes.appendChild(button);

    //Store Pokémon data globally for later use in other functions
    sportData[getDishes.id] = getDishes;
}
/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data)
{
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Er is helaas iets fout gegaan met de API, probeer het later opnieuw';
    gallery.before(error);
}
/**
 * Open the detailview with information of our sport
 *
 * @param e
 */
function sportClickHandler(e)
{
    let clickedItem = e.target;

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    //Get the information from the global stored data
    let getDishes = sportData[clickedItem.dataset.id];

    //Reset the content
    detailContent.innerHTML = '';

    //Show the name we used on the main grid
    let title = document.createElement('h1');
    title.innerHTML = `${pokemon.name} (#${pokemon.id})`;
    detailContent.appendChild(title);

    //Display the shiny
    let shiny = document.createElement('img');
    shiny.src = pokemon.sprites.other.home.front_shiny;
    detailContent.appendChild(shiny);

    //Open the modal
    detailDialog.showModal();
    gallery.classList.add('dialog-open');
}

/**
 * Close the modal if clicked on the close button or outside the modal (on the backdrop)
 *
 * @param e
 */
function detailModalClickHandler(e)
{
    if (e.target.nodeName === 'DIALOG' || e.target.nodeName === 'BUTTON') {
        detailDialog.close();
    }
}

/**
 * Also close the modal on escape key
 *
 * @param e
 */
function dialogCloseHandler(e)
{
    gallery.classList.remove('dialog-open');
}
