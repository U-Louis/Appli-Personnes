/**
 * Affiche les attribut nom, prenom, id de l'objet
 * @function print
 * @param {Object} object 
 */
function print(object){
    
    console.log("id : "+  object.id + "");
    console.log("nom : " + object.nom);
    console.log("prenom : " + object.prenom);
}

/**
 * Test la fonction getById et affiche le résultat
 * @function testGetById
 */
function testGetById(){
    getListOfMember(console.table);
    var number = parseInt(prompt("Veuillez entrer un ID à supprimer"));
    getById(number,print);
}
/**
 * test la fonction tesGetListOfMember en renvoyant sous forme de tableau la liste des membres
 */
function testGetListOfMember(){
    getListOfMember(console.table);
}
/**affiche la liste complète de la base de donnée.
 * @function testDelUser
 */
function testDelUser(){
    getListOfMember(console.table);
    var number = parseInt(prompt("Veuillez entrer un ID à supprimer"));
    delUser(number);
}
