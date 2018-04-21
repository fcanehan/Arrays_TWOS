
var basket02 =[]; 

function exo02_addToBasket(){
    var produit02 = document.getElementById("exo02_item").value;    // récupère la valeur de l'input et la stocke dans la variable
    
    if (!isAlreadyIn (basket02,produit02)) {                        // si la fonction trouve qu'une valeur n'y est pas, elle est ajoutée au panier
        basket02.push(produit02);
        majVue02();
    }
}

function majVue02(){
    var panier02 = document.getElementById("exo02_basket");         // crée une var égale à la box de la balise de type "ul"
    
    for (var i =0 ; i<basket02.length ; i++){                       // boucle qui crée une var de type "li" et transmet son contenu dans le document
        var newdiv02 = document.createElement("li");
        newdiv02.innerHTML = basket02[i];
    }
        panier02.appendChild(newdiv02);
    
}

function isAlreadyIn(basket,element){
    
    
    for ( i=0 ; i < basket.length ; i++ ){                          // boucle qui verifie si la nouvelle entrée est déjà dans le panier
        if (element === basket[i]){
            return true;                                            // si c'est le cas la valeur vaut vrai
        }
    }
    return false;
}


