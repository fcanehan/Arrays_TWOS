
var basket =[]; 

function exo01_addToBasket(){
    var produit = document.getElementById("exo01_item").value;
    basket.push(produit);
    
    majVue();
    //alert("test");
}

function majVue(){
    var panier = document.getElementById("exo01_basket");
    
    for (var i =0 ; i<basket.length ; i++){
        var newdiv = document.createElement("div");
        newdiv.innerHTML = basket[i];
    }
    panier.appendChild(newdiv);
}