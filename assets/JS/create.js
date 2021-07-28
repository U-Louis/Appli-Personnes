// ADD A USER
(function(){
    var create = $("#create");
$(create).on("click", create);

function create(url) {
    console.log("POST : " + url);

    var data = {};
    data.nom = "TERRIEUR";
    data.prenom  = "Alex";
    // var data = {"nom":"TERRIEUR","prenom":"Alex"};
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);

    xhr.onload = function () {
        var user = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(user);
        } else {
            console.error(user);
        }
    }
    }
})
