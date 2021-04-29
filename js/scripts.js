function abrirNav() {


    var x = document.getElementById("navigation");

    if (x.className === "navigation") {
       x.className += " menujs";
       document.getElementById("botaoMenu").innerHTML = "&Cross;";
    } else {
       x.className = "navigation";
       document.getElementById("botaoMenu").innerHTML = "&#9776;";	
    }

	
}