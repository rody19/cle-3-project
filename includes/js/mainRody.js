//je haalt de de data uit de json en toont dit op de pagina en vult een html element op de pagina1.
window.addEventListener('load', init);


let apiUrl = "./getInfoRody.php";
let info;
let sportData= {};
let detailDialog;
let detailContent;

let favoriteItems = [];
let inputField;
let list;

function init(){

    info = document.getElementById('pagina1Info');
    info.addEventListener('click', sportClickHandler);

    let form = document.querySelector('#favoriteForm');
    list = document.querySelector('#list');

    //Add event listeners for form & removal
    form.addEventListener('submit', formSubmitHandler);
    list.addEventListener('click', todoItemClickHandler);

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

function fillDetailCard(data){
    console.log(data);
    console.log(detailContent);
    detailContent.innerHTML = '';

    //Show the name we used on the main grid
    let title = document.createElement('h1');
    title.innerHTML = `${data.name} (#${data.id})`;
    detailContent.appendChild(title);

    let tekst = document.createElement('p');
    tekst.innerHTML = `${data.text} (#${data.id})`;
    detailContent.appendChild(tekst);

    //Open the modal
    detailDialog.showModal();
    info.classList.add('dialog-open');

}



function sportClickHandler(e) {
    let clickedItem = e.target;

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }
    ajaxRequest(apiUrl + "?id=" + clickedItem.dataset.id, fillDetailCard)
}
    // TODO: ajax request to:
    // http://localhost/cle-3-project/getInfoRody.php?id=2
    // add succeshandler for ajax call


    //Get the information from the global stored data





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



function todoItemClickHandler(e)
{
    let favoriteTarget = e.target;

    //Only continue if we clicked on a list item
    if (favoriteTarget.nodeName !== 'LI') {
        return;
    }
//Remove from local storage
    let itemIndex = favoriteItems.indexOf(favoriteItems.innerText);
    favoriteItems.splice(itemIndex, 1);
    localStorage.setItem('todoItems', JSON.stringify(favoriteItems));

    //Remove from HTML
    favoriteTarget.remove();
}

    /**
     * Handle the new input from the form
     *
     * @param e
     */
    function formSubmitHandler(informatieSport, e) {
        e.preventDefault();

        //Check if the field is not empty
        let inputValue = `${informatieSport.name} (#${informatieSport.id})`;
        if (inputValue !== '') {
            //Add to the HTML list & local storage
            addTodoItem(inputValue);
            favoriteItems.push(inputValue);
            localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
            //Reset the field
            inputField.value = '';
            inputField.classList.remove('error');
        } else {
            //Add an error state with CSS
            inputField.classList.add('error');
        }
    }

function addTodoItem(todoText)
{
    let listItem = document.createElement('li');
    listItem.innerText = todoText;
    list.appendChild(listItem);
    console.log(favoriteItems);
}
