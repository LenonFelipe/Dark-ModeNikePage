function darkMode() {                                     //função para dark mode na página//
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function menuvindo(){                                     //função para trazer o menu do carrinho//
    var menu = document.getElementById("menum")
    var menu2 = document.getElementById("beck")
    menu.style.left = "1000px"
    menu2.style.left = "1px"
}
function menuindo(){                                      //função pra levar o menu do carrinho de volta//
    var menu1 = document.getElementById("menum")
    var menu3 = document.getElementById("beck")
    menu1.style.left = "3000px"
    menu3.style.left = "3000px"
}
function menudrop(){                                       //função para fazer o dropdown do menu dos dia das mães ao passar o mouse//
    var menudrop1 = document.getElementById("drop1").style.display = "block"  
}
function menudrop1(){                                       //função para fazer o dropdown do menu dos dia das mães ao sair com o mouse//                                 
    var menudrop1 = document.getElementById("drop1").style.display = "none"
}
function lanMenuShow(){                                     
    var menushow = document.getElementById("drop2").style.display = "block"
}
function lanMenuDesable(){
    var menushow1 = document.getElementById("drop2").style.display = "none"
}
function femMenuShow(){                                     
    var menushow = document.getElementById("drop3").style.display = "block"
}
function femMenuDesable(){
    var menushow1 = document.getElementById("drop3").style.display = "none"
}
function masMenuShow(){                                     
    var menushow = document.getElementById("drop4").style.display = "block"
}
function masMenuDesable(){
    var menushow1 = document.getElementById("drop4").style.display = "none"
}
function infMenuShow(){                                     
    var menushow = document.getElementById("drop5").style.display = "block"
}
function infMenuDesable(){
    var menushow1 = document.getElementById("drop5").style.display = "none"
}
function snkMenuShow(){                                     
    var menushow = document.getElementById("drop6").style.display = "block"
}
function snkMenuDesable(){
    var menushow1 = document.getElementById("drop6").style.display = "none"
}
function puxaE(){
    var Oferta = document.getElementById("oferts")
    Oferta.style.opacity = "0%"
    Oferta.style.right = "550px"
    var frete = document.getElementById("fretes")
    frete.style.opacity = "100%"
    frete.style.left = "390px"
    frete.style.display = "block"
}