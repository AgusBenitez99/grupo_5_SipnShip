const $ = id => document.getElementById(id);

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


         /* VALIDACION FORMULARO  -- NO SE ENVIA SI HAY ERRORES */
    $('formProfile').addEventListener('submit', function(event) {
        event.preventDefault();

        const elementsForm = this.elements;
        let error = false;

        for (let i = 0; i < 3; i++) {
            
            if(!elementsForm[i].value.trim()){
                error = true;
                $('msgError-empty').innerHTML = "El formulario tiene errores"
            }

        }

        !error && this.submit()
    })

}