function abrirNav() {


    var botao= document.getElementById("navigation");

    if (botao.className === "navigation") {
       botao.className += " menujs";
       document.getElementById("botaoMenu").innerHTML = "&Cross;";
    } else {
       botao.className = "navigation";
       document.getElementById("botaoMenu").innerHTML = "&#9776;";	
    }

	
}