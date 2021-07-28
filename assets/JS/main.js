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
 * @function getById
 * @param {Number} nb 
 * @param {Function} fct 
 * CEDRIC
 */
 function getById(nb,fct){/*Prend en en paramètre un nombre et une fonction*/
    
    console.log("GET : " + adress + nb);
    
    var xhr  = new XMLHttpRequest();
    
    xhr.open('GET', adress + nb, true);
    xhr.send(null);

    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        
        if (xhr.readyState == 4 && xhr.status == "200") {/*vérifie si la requête fonctionne. */
           
        fct(users);  /*Lance la fonction fct avec le paramètre users */ 

        } else {
            console.error(users);
        }
    }
}
/**
 * getListOfMember envoie la requête pour récupérer la liste des stagiaire 
 * et si  la requête aboutit active la fonction fct avec users passé en paramètre. 
 * @function getListOfMember 
 * @param {Fonction} fct 
 */
 function getListOfMember(fct){

    console.log("GET : " + "http://srvapi/api/stagiaires");
    var xhr  = new XMLHttpRequest();
    xhr.open('GET', "http://srvapi/api/stagiaires", true);
        xhr.send(null);

        xhr.onload = function () {
            var users = JSON.parse(xhr.responseText);
            
            if (xhr.readyState == 4 && xhr.status == "200") {/*vérifie si la requête fonctionne. */
               
            fct(users);  /*Lance la fonction fct avec le paramètre users */ 

            } else {
                console.error(users);
            }
        }

}
/**Ecrit la liste des membres dans une div.
 * @function writeListeOfMember
 * @param {Object} object 
 */
function writeListeOfMember(object){
    
    
    for(key in object){
        var p = document.createElement("p")
        p.setAttribute("id",object[key].id)
        $("#listofmember").append(p);
        $("#" + object[key].id).html("id : " + object[key].id +"  nom : " + object[key].nom + "  prenom : " + object[key].prenom)  ;
        
    }
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

