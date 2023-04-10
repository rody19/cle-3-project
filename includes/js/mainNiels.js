window.addEventListener('load', init);

//Globals
let apiUrl = "./getinfoNiels.php";
let sportData = {};
let gallery;
let detailDialog;
let detailContent;
let favoriteItems = [];
let list;
let favoriteForm;
let dataForModal;

function init() {

    gallery = document.getElementById('sport-gallery');
    gallery.addEventListener('click', sportClickHandler);

    //Connect variables with HTML elements
    favoriteForm = document.querySelector('#favoriteForm');
    list = document.querySelector('#list');

    //Add event listeners for form & removal
    favoriteForm.addEventListener('submit', formSubmitHandler);
    list.addEventListener('click', todoItemClickHandler);

    //Retrieve current items from local storage & add them to the list
    let favoriteItemsString = localStorage.getItem('favoriteItems');
    if (favoriteItemsString !== null && favoriteItemsString !== undefined) { //Or: if (favoriteItemsString !== null) {
        favoriteItems = JSON.parse(favoriteItemsString);
        for (let favoriteItem of favoriteItems) {
            addTodoItem(favoriteItem);
        }
    }
    //dialog element
    detailDialog = document.getElementById('sport-card-detail');
    detailContent = document.querySelector('.modal-content');
    detailDialog.addEventListener('click', detailModalClickHandler);
    detailDialog.addEventListener('close', detailModalCloseHandler);

    //document.addEventListener('keyup', keyUpHandler);
    //Start the application with loading the API data
    ajaxRequest(apiUrl, createSportCards);
}

/**
 * AJAX-call to retrieve data from a webservice
 *
 * @param url
 * @param successHandler
 */
function ajaxRequest(url, successHandler) {
    fetch(url)
        .then((response) => {
            console.log(response.statusText);
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
function createSportCards(data) {
    //Loop through the list of Pokémon
    for (let getBeperking of data) {
        //Wrapper element for every Pokémon card. We need the wrapper now, because adding it later
        //will result in Pokémon being ordered based on the load times of the API instead of chronically
        let sportCard = document.createElement('div');
        sportCard.classList.add('create-sport-card');
        sportCard.dataset.name = getBeperking.name;

        //Append Pokémon card to the actual HTML
        gallery.appendChild(sportCard);

        //Retrieve the detail information from the API
        //ajaxRequest(getBeperking.url, fillSportCard);
        fillSportCard(getBeperking);
    }
}

/**
 * Create the actual contents of the card based on the loaded API information
 *
 * @param getBeperking
 */
function fillSportCard(getBeperking) {
    //Wrapper element for every Pokémon card
    let sportCard = document.querySelector(`.create-sport-card[data-name='${getBeperking.name}']`);

    //Element for the name of the Pokémon
    let title = document.createElement('h2');
    title.innerHTML = `${getBeperking.name}`;
    sportCard.appendChild(title);

    //Element for the tekst of the visuele beperkingen
    let tekst = document.createElement('p');
    tekst.innerText = `${getBeperking.beschrijving}`;
    sportCard.appendChild(tekst);

    //Element for the button to load the shiny version of the Pokémon
    let button = document.createElement('button');
    button.innerHTML = 'Show Details';
    button.dataset.id = getBeperking.id;
    sportCard.appendChild(button);

    //Store Pokémon data globally for later use in other functions
    sportData[getBeperking.id] = getBeperking;
}

/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data) {
    console.log(data);
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
function sportClickHandler(e) {
    let clickedItem = e.target;

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }
    ajaxRequest(apiUrl + "?id=" + clickedItem.dataset.id, fillDetailCard);
}

function fillDetailCard(data) {
    console.log(data);
    dataForModal = data;
    detailContent.innerHTML = '';

    //Show the name we used on the main grid
    let title = document.createElement('h1');
    title.innerHTML = `${data.name}`;
    detailContent.appendChild(title);

    let tekst = document.createElement('p');
    tekst.innerHTML = `${data.beschrijving}`;
    detailContent.appendChild(tekst);

    //Open the modal
    detailDialog.showModal();
    gallery.classList.add('dialog-open');
}

/**
 * Close the modal if clicked on the close button or outside the modal (on the backdrop)
 *
 * @param e
 */
function detailModalClickHandler(e) {
    if (e.target.nodeName === 'DIALOG' || e.target.nodeName === 'BUTTON') {
        detailDialog.close();
    }
}

/**
 * Also close the modal on escape key
 *
 * @param e
 */
function detailModalCloseHandler(e) {
    gallery.classList.remove('dialog-open');
}

/**
 * Handle the new input from the form
 *
 * @param e
 */
function formSubmitHandler(e) {
    e.preventDefault();
    console.log("add to favorite");
    //Check if the field is not empty
    let name = dataForModal.name;
    console.log(dataForModal.name)

    //Add to the HTML list & local storage
    addTodoItem(name);
    favoriteItems.push(name);
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));

}

/**
 * Add a new item to the HTML
 *
 * @param favoriteText
 */
function addTodoItem(favoriteText) {
    let listItem = document.createElement('li');
    listItem.innerText = favoriteText;
    list.appendChild(listItem);
    console.log(favoriteItems);
}

/**
 * Remove the clicked list item
 *
 * @param e
 */
function todoItemClickHandler(e) {
    let favoriteTarget = e.target;

    //Only continue if we clicked on a list item
    if (favoriteTarget.nodeName !== 'LI') {
        return;
    }

    //Remove from local storage
    let itemIndex = favoriteItems.indexOf(favoriteTarget.innerText);
    favoriteItems.splice(itemIndex, 1);
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));

    //Remove from HTML
    favoriteTarget.remove();
}
