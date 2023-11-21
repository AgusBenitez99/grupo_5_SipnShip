/*         const $ = id => document.getElementById(id);

window.onload = function () {
    $('name').addEventListener('focus', function (e) {
        $('msgError-name').innerHTML = null;
    });

    $('name').addEventListener('blur', function (e) {
        const nameValue = this.value.trim();

        switch (true) {
            case !nameValue:
                $('msgError-name').innerHTML = "El nombre es obligatorio";
                break;
            case nameValue.length < 2:
                $('msgError-name').innerHTML = "Mínimo dos letras";
                break;
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(nameValue):
                $('msgError-name').innerHTML = "Solo se permiten letras";
                break;
            case /\d/.test(nameValue):
                $('msgError-name').innerHTML = "No debe contener caracteres numéricos";
                break;
            default:
                $('msgError-name').innerHTML = null;
                this.classList.add('is-valid');
                this.classList.remove('is-invalid');
                break;
        }
        $('price').addEventListener('blur', function (e) {
            const priceValue = this.value.trim();
    
            switch (true) {
                case !priceValue:
                    $('msgError-price').innerHTML = "El precio es obligatorio";
                    break;
                case isNaN(priceValue) || parseFloat(priceValue) <= 0:
                    $('msgError-price').innerHTML = "El precio debe ser mayor que 0";
                    break;
                default:
                    $('msgError-price').innerHTML = null;
                    this.classList.add('is-valid');
                    this.classList.remove('is-invalid');
                    break;
            }
        });
        $('size').addEventListener('blur', function (e) {
            const sizeValue = this.value.trim();
    
            switch (true) {
                case !sizeValue:
                    $('msgError-size').innerHTML = "El tamaño es obligatorio";
                    break;
                case isNaN(sizeValue) || parseFloat(sizeValue) <= 0:
                    $('msgError-size').innerHTML = "El tamaño debe ser mayor que 0";
                    break;
                default:
                    $('msgError-size').innerHTML = null;
                    break;
            }
        });
    });

    document.getElementById('editForm').addEventListener('submit', function (e) {
       
        var hayErrores = false;
//validacion de nombre
        var nameValue = $('name').value.trim();
        if (!nameValue || nameValue.length < 2 || !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(nameValue) || /\d/.test(nameValue)) {
            $('msgError-name').innerHTML = "Error en el nombre";
            $('name').classList.add('is-invalid');
            hayErrores = true;
        } else {
            $('msgError-name').innerHTML = null;
            $('name').classList.add('is-valid');
            $('name').classList.remove('is-invalid');
        }

        //validacion de precio
        var priceValue = $('price').value.trim();
        if (priceValue==="" || isNaN(priceValue) || parseFloat(priceValue) <= 0) {
            $('msgError-price').innerHTML = "Error en el precio";
            hayErrores = true;
        } else {
            $('msgError-price').innerHTML = null;
        }

        //validacion de tamaño
        var sizeValue = $('size').value.trim();
        if (sizeValue === "" || isNaN(sizeValue)) {
            $('msgError-size').innerHTML = "El tamaño es obligatorio y debe ser un número";
            hayErrores = true;
        } else {
            $('msgError-size').innerHTML = null;
        }

        //validacion de descripcion
        var descriptionValue = $('descripcion').value.trim();
        console.log("Description Value: ", descriptionValue);
    if (descriptionValue === "") {
        console.log("Error: La descripción está vacía");
        $('msgError-description').innerHTML = "La descripción es obligatoria";
        hayErrores = true;
    } else {
        console.log("Error: La descripción es valida");
        $('msgError-description').innerHTML = null;
    }


        if (hayErrores) {
            e.preventDefault();
        }
    });
};
 */

// editValidation.js

/* const $ = id => document.getElementById(id); */

/* window.onload = function () {
    $('name').addEventListener('focus', function (e) {
        $('msgError-name').innerHTML = null;
    });

    $('name').addEventListener('blur', function (e) {
        const nameValue = this.value.trim();

        switch (true) {
            case !nameValue:
                $('msgError-name').innerHTML = "El nombre es obligatorio";
                break;
            case nameValue.length < 2:
                $('msgError-name').innerHTML = "Mínimo dos letras";
                break;
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(nameValue):
                $('msgError-name').innerHTML = "Solo se permiten letras";
                break;
            case /\d/.test(nameValue):
                $('msgError-name').innerHTML = "No debe contener caracteres numéricos";
                break;
            default:
                $('msgError-name').innerHTML = null;
                this.classList.add('is-valid');
                this.classList.remove('is-invalid');
                break;
        }
        $('price').addEventListener('blur', function (e) {
            const priceValue = this.value.trim();
    
            switch (true) {
                case !priceValue:
                    $('msgError-price').innerHTML = "El precio es obligatorio";
                    break;
                case isNaN(priceValue) || parseFloat(priceValue) <= 0:
                    $('msgError-price').innerHTML = "El precio debe ser mayor que 0";
                    break;
                default:
                    $('msgError-price').innerHTML = null;
                    this.classList.add('is-valid');
                    this.classList.remove('is-invalid');
                    break;
            }
        });
        $('size').addEventListener('blur', function (e) {
            const sizeValue = this.value.trim();
    
            switch (true) {
                case !sizeValue:
                    $('msgError-size').innerHTML = "El tamaño es obligatorio";
                    break;
                case isNaN(sizeValue) || parseFloat(sizeValue) <= 0:
                    $('msgError-size').innerHTML = "El tamaño debe ser mayor que 0";
                    break;
                default:
                    $('msgError-size').innerHTML = null;
                    break;
            }
        });
    });
 } */




document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('editForm');

    function validateFieldRealTime(input, errorMsgId) {
        input.addEventListener('input', function() {
          const value = this.value.trim();
          const errorMsg = document.getElementById(errorMsgId);
    
          if (value === '') {
            errorMsg.textContent = `El ${input.name} no puede estar vacío.`;
          } else {
            errorMsg.textContent = '';
          }
        });
      }
    
      // Llama a la función para validar en tiempo real para cada campo
      validateFieldRealTime(document.getElementById('name'), 'msgError-name');
      validateFieldRealTime(document.getElementById('size'), 'msgError-size');
      validateFieldRealTime(document.getElementById('price'), 'msgError-price');
      validateFieldRealTime(document.getElementById('description'), 'msgError-description');

      
      
      // Función para validar todos los campos
      function validateForm() {
        let isValid = true;
    
        // Validar nombre
        isValid = isValid && validateField(document.getElementById('name'), 'msgError-name');
     }
  
    form.addEventListener('submit', function(event) {
      // Validar nombre
      const nameInput = document.getElementById('name');
      if (nameInput.value.trim() === '') {
        event.preventDefault();
        document.getElementById('msgError-name').textContent = 'El nombre no puede estar vacío.';
      } else {
        document.getElementById('msgError-name').textContent = '';
      }
  
      // Validar tamaño
      const sizeInput = document.getElementById('size');
      if (sizeInput.value.trim() === '') {
        event.preventDefault();
        document.getElementById('msgError-size').textContent = 'El tamaño no puede estar vacío.';
      } else {
        document.getElementById('msgError-size').textContent = '';
      }
  
      // Validar precio
      const priceInput = document.getElementById('price');
      if (isNaN(priceInput.value) || priceInput.value <= 0) {
        event.preventDefault();
        document.getElementById('msgError-price').textContent = 'Ingrese un precio válido.';
      } else {
        document.getElementById('msgError-price').textContent = '';
      }
  
      // Validar descripción
      const descriptionInput = document.getElementById('description');
      if (descriptionInput.value.trim() === '') {
        event.preventDefault();
        document.getElementById('msgError-description').textContent = 'La descripción no puede estar vacía.';
      } else {
        document.getElementById('msgError-description').textContent = '';
      }

      //validar imagen principal
      const mainImageInput = document.getElementById('mainImage');
      if (mainImageInput.files.length > 0) {
        const allowedFormats = ['jpg', 'jpeg', 'png'];
        const mainImageExtension = mainImageInput.files[0].name.split('.').pop().toLowerCase();
  
        if (!allowedFormats.includes(mainImageExtension)) {
          event.preventDefault();
          document.getElementById('msgError-mainImage').textContent = 'Formato de imagen no válido. Use jpg, jpeg o png.';
          return; // Terminar la función si hay un error
        }
    }
    });
  });
  
  