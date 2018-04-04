
var basket03 =[]; 

function exo03_addToBasket(){
    var produit03 = document.getElementById("exo02_item").value;
    
    if(!isAlreadyIn(basket03,produit03)){
        basket03.push(produit03);
    majVue03();
    }
    
    //alert("test");
}

function majVue03(){
    var panier03 = document.getElementById("exo02_basket");
    
    for (var i =0 ; i<basket03.length ; i++){
        var newdiv03 = document.createElement("li");
        newdiv03.innerHTML = basket03[i];
    }
        panier03.appendChild(newdiv03);
    
}

function isAlreadyIn(basket,element){
    
    
    for ( i=0 ; i < basket.length ; i++ ){
        if (element === basket[i]){
            return true;
        }else if (i === (basket.length -1)){ 
            return false;
        }    
    }
    
}


