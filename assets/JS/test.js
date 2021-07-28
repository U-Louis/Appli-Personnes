/**
 * Affiche les attribut nom, prenom, id de l'objet
 * @param {Object} object 
 */
function print(object){
    
    console.log("id : "+  object.id + "");
    console.log("nom : " + object.nom);
    console.log("prenom : " + object.prenom);
}
/**
 * Test la fonction getById et affiche le résultat
 */
function testGetById(){
    getById(92,print);
}
