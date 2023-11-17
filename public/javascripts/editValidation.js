const $ = id => document.getElementById(id);

window.onload = function () {

    $('name').addEventListener('focus', function (e) {
        $('msgError-name').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })
    $('name').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = "El nombre es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-name').innerHTML = "Mínimo dos letras";
                this.classList.add('is-invalid')
                break
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-name').innerHTML = "Solo se permiten letras";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-name').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });
    /*  $('categoria').addEventListener('blur', function (e) {
         switch (true) {
             case !this.value.trim():
                 $('msgError-categoria').innerHTML = "Debes seleccionar una categoría";
                 this.classList.add('is-invalid');
                 break;
             default:
                 $('msgError-categoria').innerHTML = null;
                 this.classList.add('is-valid');
                 this.classList.remove('is-invalid');
                 break;
         }
     }); */
    $('price').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-price').innerHTML = "El precio es obligatorio";
                this.classList.add('is-invalid');
                break;
            case isNaN(this.value.trim()) || parseFloat(this.value.trim()) <= 0:
                $('msgError-price').innerHTML = "El precio debe ser mayor que 0";
                this.classList.add('is-invalid');
                break;
            default:
                $('msgError-price').innerHTML = null;
                this.classList.add('is-valid');
                this.classList.remove('is-invalid');
                break;
        }
    })
    $('size').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-size').innerHTML = "El tamaño es obligatorio";
                this.classList.add('is-invalid');
                break;
            default:
                $('msgError-size').innerHTML = null;
                this.classList.add('is-valid');
                this.classList.remove('is-invalid');
                break;
        }
    });
    $('editForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const elementsForm = this.elements; 
        let error = false; 

        for (let i = 0; i < elementsForm.length - 1; i++) { 

            if (!elementsForm[i].value.trim()) { 

                error = true; 
            $('msgError-empty').innerHTML = "El formulario tiene errors" 
        }
    
    } 
    !error && this.submit()
    })
};


//imagen
/*  window.onload = function(e){
    $('mainImage').addEventListener('change', function(e){
        const fileInput = this;
        const errorMessage = $('msgError-mainImage');

        // Limpiar mensajes de error previos
        errorMessage.innerHTML = null;
        fileInput.classList.remove('is-invalid');
        fileInput.classList.remove('is-valid');

        // Verificar si se seleccionó un archivo
        if (!fileInput.files || fileInput.files.length === 0) {
            errorMessage.innerHTML = "Debe seleccionar una imagen";
            fileInput.classList.add('is-invalid');
            return;
        }

        // Verificar si el tipo de archivo es una imagen
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const selectedType = fileInput.files[0].type;
        if (!allowedTypes.includes(selectedType)) {
            errorMessage.innerHTML = "Formato de imagen no válido. Seleccione una imagen JPEG, PNG o GIF.";
            fileInput.classList.add('is-invalid');
            return;
        }

        // Si la validación es exitosa, puedes realizar otras acciones si es necesario
        errorMessage.innerHTML = null;
        fileInput.classList.add('is-valid'); */