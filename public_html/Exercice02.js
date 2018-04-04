
var basket02 =[]; 

function exo02_addToBasket(){
    var produit02 = document.getElementById("exo02_item").value;
    
    if(!isAlreadyIn(basket02,produit02)){
        basket02.push(produit02);
    majVue02();
    }
    
    //alert("test");
}

function majVue02(){
    var panier02 = document.getElementById("exo02_basket");
    
    for (var i =0 ; i<basket02.length ; i++){
        var newdiv02 = document.createElement("li");
        newdiv02.innerHTML = basket02[i];
    }
        panier02.appendChild(newdiv02);
    
}

function isAlreadyIn(basket,element){
    
    
    for ( i=0 ; i < basket.length ; i++ ){
        if (element === basket[i]){
            return true;
        }
        else if (i === (basket.length -1)){ 
            return false;
        }    
    }
    
}


