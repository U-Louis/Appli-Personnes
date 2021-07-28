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
var nom;
var prenom;
var valider;


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
    nom = $("#nom");
    prenom = $("#prenom");
    valider = $("#btnvalid");

    // Add Event
    searchBar.on("keyup", getSearchValue);
    valider.on("click", function() { create(nom, prenom) });




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
    $(modal).append('<table>' + '<tr>' + '<td>' + "<strong>ID</strong> : " + objet.id + '</td>' + '<td>' + "     <strong>Nom</strong> : " + objet.nom + '</td>' + '<td>' + "    <strong>Prénom</strong> : " +
        objet.prenom + '</td>' + '</tr>' + '</table>');
    var filter, ul, li, a, i, txtValue;

    ul = document.getElementsByTagName("tr");
    li = ul.getElementsByTagName('td');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
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

/**
 * function create permet d'ajouter une nouvelle personne à la BDD 
 * @param {string,string}  résultat input nom et prénom après submit du formulaire de création
 * AURELIE ET FLAVIE
 */

// ADD A USER

function create(nom, prenom) {
    console.log("POST : " + url);

    var data = {};
    data.nom = "TERRIEUR";
    data.prenom = "Alex";
    // var data = {"nom":"TERRIEUR","prenom":"Alex"};
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);

    xhr.onload = function() {
        var user = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(user);
        } else {
            console.error(user);
        }
    }
}