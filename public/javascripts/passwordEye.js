const pass = document.getElementById("password"),
icon = document.querySelector(".fa-eye") 

icon && icon.addEventListener("click", e => {
    if (pass.type === "password") {
        pass.type = "text";
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
    } else {
        pass.type = "password"
        icon.classList.add('fa-eye')
        icon.classList.remove('fa-eye-slash')
    }
})