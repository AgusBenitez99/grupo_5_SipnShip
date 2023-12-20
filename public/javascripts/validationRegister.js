
window.onload = function() {

    /* VALIDACION CAMPO NAME */
    $('name').addEventListener('focus', function(e){
        $('msgError-name').innerHTML = 'Escriba su nombre'
        $('msgError-name').style.color = 'green'
    })

    $('name').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = "El nombre es obligatorio"
                $('msgError-name').style.color = 'red'      
                break;
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-name').innerHTML = "Solo se permiten letras";
                $('msgError-name').style.color = 'red'   
                break
            case this.value.trim().length < 3:
                $('msgError-name').innerHTML = "Debe tener como minimo 3 letras";
                $('msgError-name').style.color = 'red'   
                break
            default:
                $('msgError-name').innerHTML = null;
                break;
        }
    });


        /* VALIDACION CAMPO LASTNAME */
    $('lastName').addEventListener('focus', function(e){
        $('msgError-lastName').innerHTML = 'Escriba su apellido'
        $('msgError-lastName').style.color = 'green'
    })

    $('lastName').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-lastName').innerHTML = "El apellido es obligatorio"
                $('msgError-lastName').style.color = 'red'   
                break;
            case this.value.trim().length < 2:
                $('msgError-lastName').innerHTML = "Mínimo dos letras";
                $('msgError-lastName').style.color = 'red'   
                break
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-lastName').innerHTML = "Solo se permiten letras";
                $('msgError-lastName').style.color = 'red'   
                break
            default:
                $('msgError-lastName').innerHTML = null;
                break;
        }
    });


        /* VALIDACION CAMPO EMAIL */
    $('email').addEventListener('focus', function(e){
        $('msgError-email').innerHTML = 'Escriba su email'
        $('msgError-email').style.color = 'green'
    })
    
    $('email').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-email').innerHTML = "El email es obligatorio"
                $('msgError-email').style.color = 'red'   

                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value.trim()):
                $('msgError-email').innerHTML = "El formato es inválido";
                $('msgError-email').style.color = 'red'   

                break
            default:
                $('msgError-email').innerHTML = null;
                break;
        }
    })

     $('email').addEventListener('change', async function(e){

        try {

            const response = await fetch(`/api/check-email?email=${this.value.trim()}`)
            const result = await response.json()

            if(result.data) {
                $('msgError-email').innerHTML = "El email ya se encuentra registrado"
                $('msgError-email').style.color = 'red'   
            }     
            
        } catch (error) {
            console.error(error);
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
            case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/.test(this.value.trim()):
                $('msgError-password').innerHTML = "La contraseña debe tener entre 6 y 12 caracteres, minúscula, mayúscula, número y caracter especial";
                $('msgError-password').style.color = 'red'   
                break
            default:
                $('msgError-password').innerHTML = null;
                break;
        }
    });


         /* VALIDACION CAMPO PASSWORD2  -- CONFIRMACION CON PASSWORD 2 */
    $('password2').addEventListener('focus', function(e){
                    $('msgError-password2').innerHTML = 'Confirma tu contraseña'
                    $('msgError-password2').style.color = 'green'
    })
    $('password2').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-password2').innerHTML = "Debes confirmar tu contraseña"
                $('msgError-password2').style.color = 'red'   
                break;
            case this.value.trim() !== $('password').value.trim():
                $('msgError-password2').innerHTML = "Las contraseñas no coinciden";
                $('msgError-password2').style.color = 'red'   
                break
            default:
                $('msgError-password2').innerHTML = null;
                break;
        }
    });

             /* VALIDACION CAMPO BIRTHDATE */
    $('birthdate').addEventListener('focus', function(e){
        $('msgError-birthdate').innerHTML = 'Seleccione su edad'
        $('msgError-birthdate').style.color = 'green'
    })
    $('birthdate').addEventListener('blur', function(e){
        const birthdate = moment(this.value);
        const minDate = moment().subtract(100,'years');
        const currentDate = moment().add(18, 'years');

        switch (true) {
            case !this.value.trim():
                $('msgError-birthdate').innerHTML = "Debes colocar tu edad"
                $('msgError-birthdate').style.color = 'red'   
                break;
            case birthdate.isBefore(minDate):
                $('msgError-birthdate').innerHTML = "La edad supera el maximo permitido";
                $('msgError-birthdate').style.color = 'red' 
                break
            case birthdate.isAfter(currentDate):
                $('msgError-birthdate').innerHTML = "Debes tener mas de 18 años";
                $('msgError-birthdate').style.color = 'red' 
                break
            default:
                $('msgError-birthdate').innerHTML = null;
                break;
        }
    });

         /* VALIDACION FORMULARO  -- NO SE ENVIA SI HAY ERRORES */
    $('formRegister').addEventListener('submit', function(event) {
        event.preventDefault();

        const elementsForm = this.elements;
        let error = false;

        for (let i = 0; i < 6; i++) {
            
            if(!elementsForm[i].value.trim()){
                error = true;
                $('msgError-empty').innerHTML = "El formulario tiene errores"
            }

        }

        !error && this.submit()
    })

}