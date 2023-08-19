document.addEventListener("DOMContentLoaded", function() {
    var opciones = document.getElementById("opciones").getElementsByTagName("li");
    for (var i = 0; i < opciones.length; i++) {
        opciones[i].addEventListener("click", function() {
            var targetDivId = this.getAttribute("data-target");
            var targetDiv = document.getElementById(targetDivId);

            // Oculta todos los divs
            var divs = document.querySelectorAll("div");
            divs.forEach(function(div) {
                div.classList.remove("table__container-vista");
            });

            // Muestra el div seleccionado
            targetDiv.classList.add("table__container-vista");
        });
    }
});
