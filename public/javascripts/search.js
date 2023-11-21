const $ = (id) => document.getElementById(id);



$("search").addEventListener("submit", function (event) {
    event.preventDefault();
    var searchTerm = this.querySelector('input[name="keywords"]').value.trim();

    if (!/^[a-zA-Z\s]+$/.test(searchTerm)) {
        $("msgError-search").innerHTML = "Debe ingresar una cadena de texto";
        this.classList.add("is-invalid");
        return false
    }
    
    return this.submit();
})