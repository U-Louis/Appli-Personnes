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
var showId;
var showNom;
var showPrenom;
var addForm;


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
    showId = $("#showId");
    showNom = $("#showNom");
    showPrenom = $("#showPrenom");
    addForm= $("#addForm");
    log= $("#log");

    // Add Event
    searchBar.on("keyup", getSearchValue);
    valider.on("click", function() { create(nom, prenom) });
    btnCreatePerson.on("click",showForm);
    btnLogAction.on("click",showLog);





});

// -------------- FUNCTIONS ----------------------
/**
 * @function recherche appelle la fonction getById qui affiche le resultat de la recherche dans un modal en dessous de la barre.
 * @param {Object} objet "stagiaire" récupéré par la requête AJAX
 * @returns {number, string, string} id, nom et prénom de l'objet "stagiaire"
 * AURELIE & FLAVIE
 */
function recherche(objet) {

    $(showId).empty();
    // $(modal).append('<table>' + '<tr>' + '<td>' + "<strong>ID</strong> : " + objet.id + '</td>' + '<td>' + "     <strong>Nom</strong> : " + objet.nom + '</td>' + '<td>' + "    <strong>Prénom</strong> : " +
    //     objet.prenom + '</td>' + '</tr>' + '</table>');
    $(showId).append(objet.id);
    $(showNom).empty();
    $(showNom).append(objet.nom);
    $(showPrenom).empty();
    $(showPrenom).append(objet.prenom);
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
    console.log("POST : " + adress);

    var data = {};
    data.nom = nom;
    data.prenom = prenom;
    // var data = {"nom":"TERRIEUR","prenom":"Alex"};
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", adress, true);
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

function showForm(){          
        if(addForm.is(':hidden'))
         {
           addForm.show('slow');
           log.hide('slow');
         }else{
           addForm.hide('slow');
         }
}

function showLog(){
    if(log.is(':hidden'))
    {
      log.show('slow');
      addForm.hide('slow');
    }else{
      log.hide('slow');
    }
}