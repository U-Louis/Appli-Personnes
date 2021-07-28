
    // var httpRequest = new XMLHttpRequest() ;
    // var btnCreatePerson = $("#btncreateperson") ;
    // var btnDeletePerson = $("#btndelete");
    // var btnUpdatePerson = $("#btnupdate");
    // var btnReadPerson = $("#btnread") ;
    // var searchBar = $("#search");
    // var btnSearch = $("btnsearch")  ;
    // var modal = $("")  ;  
    // var btnLogAction = $("btnlogaction");

var aPerson = {};

var adress = "http://srvapi/api/stagiaire/"

/**
 * Lance une requête avec nb en paramètre puis lance la fonction fct une fois la requête terminé.
 * @param {Number} nb 
 * @param {Function} fct 
 * 
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
   





