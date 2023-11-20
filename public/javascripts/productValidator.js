const $ = (id) => document.getElementById(id);

window.onload = function () {
  $("name").addEventListener("focus", function (e) {
    $("msgError-name").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });
  $("name").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-name").innerHTML = "El nombre es obligatorio";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgError-name").innerHTML = "Mínimo dos letras";
        this.classList.add("is-invalid");
        break;
      case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
        $("msgError-name").innerHTML = "Solo se permiten letras";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-name").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });
  $("price").addEventListener("focus", function (e) {
    $("msgError-price").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });
  $("price").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-price").innerHTML = "El precio es obligatorio";
        this.classList.add("is-invalid");
        break;
      case isNaN(this.value.trim()) || parseFloat(this.value.trim()) <= 0:
        $("msgError-price").innerHTML = "El precio debe ser mayor a 0";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-price").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });
  $("size").addEventListener("focus", function (e) {
    $("msgError-size").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });
  $("size").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-size").innerHTML = "El tamaño es obligatorio";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-size").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });
  $("description").addEventListener("focus", function (e) {
    $("msgError-description").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });
  $("description").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-description").innerHTML = "La descripcion es obligatorio";
        this.classList.add("is-invalid");
        break;
        case this.value.trim().length<=10 || this.value.trim().length>=500:
          $("msgError-description").innerHTML = "La descripción debe tener entre 10 y 500 caracteres";
          this.classList.add("is-invalid");
          break;
      default:
        $("msgError-description").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });
  $("mainImage").addEventListener("focus", function (e) {
    $("msgError-mainImage").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });
  $("mainImage").addEventListener("change", function (e) {
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

    switch (true) {
      case !this.files || this.files.length === 0:
        $("msgError-mainImage").innerHTML = "Debe seleccionar una imagen";
        this.classList.add("is-invalid");
        break;
        case !allowedExtensions.exec(this.value):
          $("msgError-mainImage").innerHTML = "Solo se permiten archivos con extensiones .jpg, .jpeg o .png";
          this.classList.add("is-invalid");
          break;
        
      default:
        $("msgError-mainImage").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });
  $("category").addEventListener("focus", function (e) {
    $("msgError-category").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });
  $("category").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-category").innerHTML = "La categoria es obligatorio";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-category").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });
  $("section").addEventListener("focus", function (e) {
    $("msgError-section").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });
   $("section").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-section").innerHTML = "La categoria es obligatorio";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-category").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("formRegister").addEventListener("submit", function (event) {
    event.preventDefault();

    const elementsForm = this.elements;
    let error = false;

    const name = $("name");
    const price = $("price");
    const size = $("size");
    const description = $("description");
    for (let i = 0; i < elementsForm.length - 1; i++) {
      if (elementsForm[i].classList.contains("is-invalid")) {
        error = true;
        break;
      }
    }
    if (name.value.trim() === "") {
      name.classList.add("is-invalid");
      error = true;
    }
    if (price.value.trim() === "") {
      price.classList.add("is-invalid");
      error = true;
    }
    if (size.value.trim() === "") {
      size.classList.add("is-invalid");
      error = true;
    }
    if (description.value.trim() === "") {
      description.classList.add("is-invalid");
      error = true;
    }

    if (error) {
      $("msgError-empty").innerHTML = "El formulario tiene errores";
    } else {
      // Si no hay errores, puedes enviar el formulario
      this.submit();
    }
  });
};


