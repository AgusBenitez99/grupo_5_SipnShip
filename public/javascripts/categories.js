const showCategories = async function () {

    try {
        const response = await fetch ('http://localhost:3000/api/categoriesMenu')
        const { ok, message, data:categories } = await response.json();
      console.log(categories)
      $('headers-categories').innerHTML = ""
        categories.forEach(
          ({ id, name}) => {
            $('headers-categories').innerHTML += `   
                <div class="home__categorias-center">
                  <div class="categorias-center--btn-2">
                    <a href="/search/${id}"> <span>${name}</span>  </a>        
                  </div>
                </div>`
            })

    } catch (error) {
        console.log(error)
        Swal.fire({
          title: "Upps",
          html: error.message,
          icon: "error",
        });
    }
}