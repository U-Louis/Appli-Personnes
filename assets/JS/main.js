
    // var httpRequest = new XMLHttpRequest() ;
    // var btnCreatePerson = $("#btncreateperson") ;
    // var btnDeletePerson = $("#btndelete");
    // var btnUpdatePerson = $("#btnupdate");
    // var btnReadPerson = $("#btnread") ;
    // var searchBar = $("#search");
    // var btnSearch = $("btnsearch")  ;
    // var modal = $("")  ;  
    // var btnLogAction = $("btnlogaction");

var aPerson = [];

var adress = "http://srvapi/api/stagiaire/"

/**
 * Récupère l'identifiant, le nom et le prénom de la cible par son identifiant
 * @param {Number} nb 
 * @returns {Object} 
 */
function getById(nb){
    
        console.log("GET : " + adress + nb);
        
        var xhr  = new XMLHttpRequest();
        var aUser ={};
        xhr.open('GET', adress + nb, true);
        xhr.send(null);

        xhr.onload = function () {
            var users = JSON.parse(xhr.responseText);
            
            if (xhr.readyState == 4 && xhr.status == "200") {
                for(key in users){
                    // console.table(key + " : " +users[key])
                    aUser[key]=users[key];
                };
                
            } else {
                console.error(users);
            }
        }
        return aUser;
    

}

var a = getById(92);
console.log(a.id);
console.log(a.nom);
console.log(a.prenom);


