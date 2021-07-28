function printTypeOfAttribute(objet){
    
    console.log(objet.id);
    console.log(objet.prenom);
    console.log(objet.nom);
}
function print(a){
    
    console.log("id : "+  a.id + "");
    console.log("nom : " + a.nom);
    console.log("prenom : " + a.prenom);
}

getById(92,print);