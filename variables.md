# Listes des Variables
`var httpRequest = new XMLHttpRequest()`  
`var btnCreatePerson = $("#btncreateperson")`  
`var btnDeletePerson = $("#btndelete")`  
`var btnUpdatePerson = $("#btnupdate)`  
`var btnReadPerson = $("#btnread")`  
`var searchBar = $("#search")`  
`var btnSearch = $("btnsearch")`  
`var modal = $("#dynamSearch")`  
`var aPerson = []`
`var btnLogAction = $("btnlogaction")`  
`function BDD()`  
`var adress = http://srvapi/api/stagiaire/`
# Liste des fonctions
`function getById(nb)` renvoie un objet avec les attributs id, nom, prenom.  
Exemple: 
`var obj = getById(92);`
`console.log(obj.nom)` affiche la valeur de l'attribut nom.
`console.log(obj.prenom)` affiche la valeur de l'attribut prenom.
`console.log(obj.id)` affiche la valeur de l'attribut id.
