
var basket03 =[]; 
var quantity=[];

function exo03_addToBasket(){
    var produit03 = document.getElementById("exo03_item").value;
    
    var createOrAdd= isAlreadyIn(basket03,produit03);

    if (createOrAdd=== false){
        basket03.push(produit03);
        quantity.push(1);
        majVue03();
    }else{
        for(i = 0 ; i< basket03.length ; i++){
            if (produit03 === basket03[i]){
                quantity[i]=quantity[i]+1;
            }
        }
        
        
    
    majVue03();
    }
    addControllers();
    //alert("test");
}

function majVue03(){
    
    var clearDiv =  document.getElementById("exo03_basket");
   
   while (clearDiv.firstChild) {
        clearDiv.removeChild(clearDiv.firstChild);
    }
    
    var panier03 = document.getElementById("exo03_basket");
    
    for (var i =0 ; i<basket03.length ; i++){
        var newdiv03 = document.createElement("li");
        newdiv03.innerHTML = basket03[i]+" " + addControllers(i);
        panier03.appendChild(newdiv03);
    }
    
}

function isAlreadyIn(basket,element){
    
    
    for ( i=0 ; i < basket.length ; i++ ){
        if (element === basket[i]){
            return true;
        }  
    }
    return false;
}

function updateQuantity(basket,element){
     
    
}

function addControllers(index){
    
        return "<a href='#' onclick='remove("+i+"])'> - </a> <a href='#' onclick='add("+i+"])'> + </a> quantité :" + quantity[index];    
}   

function add(index){
    quantity[index] += 1;
    majVue03();
}

function remove(index){
    quantity[index] -=1;
    if(quantity[index]===0){
        basket03.splice(index,1);
        quantity.splice(index,1);
    }
    majVue03();
}