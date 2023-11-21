const $ = (id) => document.getElementById(id);

window.onload = function () {

  /* VALIDACION CAMPO EMAIL */
  $("email").addEventListener("focus", function (e) {
    $("msgError-email").innerHTML = "Escriba su email";
    $("msgError-email").style.color = "green";
  });

  $("email").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-email").innerHTML = "El email es obligatorio";
        $("msgError-email").style.color = "red";

        break;
      case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value.trim()):
        $("msgError-email").innerHTML = "El formato es inválido";
        $("msgError-email").style.color = "red";

        break;
      default:
        $("msgError-email").innerHTML = null;
        break;
    }
  });

    /* VALIDACION CAMPO PASSWORD */
    $('password').addEventListener('focus', function(e){
        $('msgError-password').innerHTML = 'Escriba su contraseña'
        $('msgError-password').style.color = 'green'
    })

    $('password').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-password').innerHTML = "La contraseña es obligatoria"
                $('msgError-password').style.color = 'red'   
                    break;
            case this.value.trim().length <= 6:
                $('msgError-password').innerHTML = "La contraseña debe tener mas de 6 caracteres"
                $('msgError-password').style.color = 'red'   
                    break;
            case this.value.trim().length >= 12:
                $('msgError-password').innerHTML = "La contraseña no puede superar los 12 caracteres"
                $('msgError-password').style.color = 'red'   
                    break;
            default:
                $('msgError-password').innerHTML = null;
                break;
        }
    });

  /* VALIDACION FORMULARO  -- NO SE ENVIA SI HAY ERRORES */
  $("formLogin").addEventListener("submit", function (event) {
    event.preventDefault();

    const elementsForm = this.elements;
    let error = false;

    for (let i = 0; i < 2; i++) {
      if (!elementsForm[i].value.trim()) {
        error = true;
        $("msgError-empty").innerHTML = "El formulario tiene errores";
      }
    }

    !error && this.submit();
  });
};
