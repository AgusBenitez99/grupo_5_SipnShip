const addItemToCart = async (amount, product) => {
    try {

        const response = await fetch('/cart', {
            method : "POST",
            body : JSON.stringify({
                amount,
                product
            }),
            headers : {
                'Content-Type' : 'application/json',
            }            
        })

        const {ok, cart, message} = await response.json();

        if(!ok){
            throw new Error(message)
        }
        
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: "Upps",
            html: `
            ${error.message} 
            <br><br><a 
            style="color: blue; text-decoration: underline;" 
            href="/user/login">Ir a la página de inicio de sesión</a>
            `,
            icon: "error"
          });
    }
}

window.onload = function () {

    $("btn-cart") && $("btn-cart").addEventListener('click', async function (e) {
       
        try {

            const response = await fetch ('/cart')
            const {ok, cart, message} = await response.json();

            if(ok) {
                if(cart.products.length) {
                    $('cart-body').innerHTML = `
            
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Imagen</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody id="cart-table">
                        
                        </tbody>
                          <caption>
                          <div class="d-flex justify-content-end">
                          $ <span id="showTotal"></span> 
                          </div>
                          </caption>
                    </table>
                    `;
                    
                    console.log(cart.products)

                    cart.products.forEach(({mainImage, name, price, discount, amount}) => {
                        $('cart-table').innerHTML += `
                        <tr>
                            <th scope="row">
                            <img src="/images/${mainImage}" width=100 alt"" />
                            </th>
                            <td>${name}</td>
                            <td>${amount}</td>
                            <td>${price}</td>
                            </tr>
                            `
                        
                    });

                    
                }else {
                    $('cart-body').innerHTML = `
                    <div class="alert alert-warning" role="alert">
                        No hay productos en el carrito.
                    </div>
                  `

                }
               
            }else {
                throw new Error(message)
            }
            
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Upps", 
                html: error.message,
                icon: "error"
              });
            
        }
    })
}