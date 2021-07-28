//Déclaration des variables 

var httpRequest;
var btnCreatePerson;
var btnDeletePerson;
var btnUpdatePerson;
var btnReadPerson;
var searchBar;
var modal;
var aPerson;
var btnLogAction;
var httpRequest = new XMLHttpRequest();
var adress = "http://srvapi/api/stagiaire/";


// fonctions executee au chargement de la page web
$(document).ready(function() {
    // Init variables

    btnCreatePerson = $("#btncreateperson");
    btnDeletePerson = $("#btndelete");
    btnUpdatePerson = $("#btnupdate");
    btnReadPerson = $("#btnread");
    searchBar = $("#search");
    modal = $("#dynamSearch");
    aPerson = [];
    btnLogAction = $("#btnlogaction");

    // Add Event
    searchBar.on("keyup", getSearchValue);



});

// -------------- FUNCTIONS ----------------------
/**
 * @function recherche appelle la fonction getById qui affiche le resultat de la recherche dans un modal en dessous de la barre.
 * @param {Object} objet "stagiaire" récupéré par la requête AJAX
 * @returns {number, string, string} id, nom et prénom de l'objet "stagiaire"
 * AURELIE & FLAVIE
 */
function recherche(objet) {

    $(modal).empty();
    $(modal).append('<span>' + objet.id + objet.nom + objet.prenom + '</span>');
    // Et on affiche !
}


/**
 * @function getSearchValue appelle la fonction getById qui affiche le resultat de la recherche dans un modal en dessous de la barre.
 * @param {Object} objet "stagiaire" récupéré par la requête AJAX
 * @returns {number, string, string} id, nom et prénom de l'objet "stagiaire"
 * AURELIE & FLAVIE
 */
function getSearchValue() {
    $(searchBar).on("input", function(e) {
        var nombre = $(this).val();
        getById(nombre, recherche);

    });
}

/**
 * Lance une requête avec nb en paramètre puis lance la fonction fct une fois la requête terminée.
 * @param {Number} nb 
 * @param {Function} fct 
 * CEDRIC
 */
function getById(nb, callback) {

    console.log("GET : " + adress + nb);

    var xhr = new XMLHttpRequest();
    var aUser = {};
    xhr.open('GET', adress + nb, true);
    xhr.send(nb);

    xhr.onload = function() {
        var users = JSON.parse(xhr.responseText);

        if (xhr.readyState == 4 && xhr.status == "200") {
            for (key in users) {
                console.table(key + " : " + users[key])
                aUser[key] = users[key];
            };

            callback(users);

        } else {
            console.error(users);
        }
    }
    recherche(aUser);
    return aUser;

}