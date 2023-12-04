const addItemToCart = async (amount, product) => {
    try {

        const response = await fetch('/cart', {
            method : "POST",
            body : {
                amount,
                product
            }
        })

        const {ok, cart, message} = await response.json();

        if(!ok){
            throw new Error(message)
        }
        
    } catch (error) {
        console.log(error)
        alert(error.message)       
    }
}

window.onload = function () {

    $("btn-cart") && $("btn-cart").addEventListener('click', async function (e) {
       
        try {

            const response = await fetch ('/cart')
            const {ok, cart, message} = await response.json();

            if(ok) {
                if(cart.products.length) {
                    $('cart-body').innerHTML = `<p>aqui voy a dibujar los productos</p>`
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
            alert(error.message)
            
        }
    })
}