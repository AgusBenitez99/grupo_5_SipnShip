const showCategories = async function () {

    try {
        const response = await fetch ('http://localhost:3000/apis/categories')
        const { ok, message, data } = await response.json();

        console.log(data)

    } catch (error) {
        console.log(error)
        Swal.fire({
          title: "Upps",
          html: error.message,
          icon: "error",
        });
    }

window.onload = function () {
    $('headers-categories').innerHTML += `
    <% categories.forEach(categoria => { %>
        <div class="home__categorias-center">
          <div class="categorias-center--btn-2">
            <a href="/search/<1%= categoria.id %>"><span><1%= categoria.name %></span></a> 
            
          
          </div>
        </div>
      <% }) %> 
    }
    )`

}
}
