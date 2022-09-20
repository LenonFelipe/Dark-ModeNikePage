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
window.onload = function menus(){
    
    setTimeout(menuUmPush, 1000)

        function menuUmPull(){
            const menuUm = document.getElementById("oferts");
            menuUm.style.opacity = "0"
            menuUm.style.right = "100px"
        }
        setTimeout(menuUmPull, 10000)

            function menuDoisPull(){
                const menuDois = document.getElementById("fretes");
                menuDois.style.opacity = "100"
                menuDois.style.left = "390px"
            }
            setTimeout(menuDoisPull, 10000)

                function menuDoisPush(){
                    const menuDois = document.getElementById("fretes");
                    menuDois.style.opacity = "0"
                    menuDois.style.left = "390px"
                }
                setTimeout(menuDoisPush, 15000)

                    function menuTresPull(){
                        const menuTres = document.getElementById("moda");
                        menuTres.style.opacity = "100"
                        menuTres.style.left = "-30px"
                    }
                    setTimeout(menuTresPull, 15000)
                        function menuTresPush(){
                            const menuTres = document.getElementById("moda");
                            menuTres.style.opacity = "0"
                            menuTres.style.left = "-30px"
                        }
                        setTimeout(menuTresPush, 20000)

                            function menuUmPush(){
                                const menuUm = document.getElementById("oferts");
                                menuUm.style.opacity = "100"
                                menuUm.style.right = "0px"
                            }
                            setTimeout(menuUmPush, 20000)
    }
