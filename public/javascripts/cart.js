const showProductInCart = (products, total) => {
    if($('cart-table')){
        $("cart-table").innerHTML = null;
        products.forEach(
            ({ id, mainImage, name, price, discount, amount }) => {
              $("cart-table").innerHTML += `
                      <tr>
                          <th scope="row">
                          <img src="/images/${mainImage}" width=100 alt"" />
                          </th>
                          <td>${name}</td>
                          <td>
                              <div class="d-flex gap-2">
                                  <buttonn onclick="removeItemToCart(${id})" class="btn btn-sm btn-danger"><i class="fa-solid fa-minus"></i></buttonn>
                                  <input type="text" value="${amount}" style="width:30px;text-align:center" />
                                  <buttonn onclick="addItemToCart(1,${id})" class="btn btn-sm btn-success"><i class="fa-solid fa-plus"></i></buttonn>
                              </div>                           
                          </td>
                          <td>${price * amount}</td>
                          <td>
                            <h3 onclick="removeAllItem(${id})" class="text-danger"><i class="fa fa-trash"></i></h3>
                          </td>
                          </tr>
                          `;
             }
          );
          $('showTotal').innerHTML = total
    }
}

const addItemToCart = async (amount, product) => {
  try {
    const response = await fetch("/cart", {
      method: "POST",
      body: JSON.stringify({
        amount,
        product : +product,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { ok, cart, message } = await response.json();

    if (!ok) {
      throw new Error(message);
    }

    showProductInCart(cart.products, cart.total)

  } catch (error) {
    Swal.fire({
      title: "Upps",
      html: `
            ${error.message} 
            <br><br><a 
            style="color: blue; text-decoration: underline;" 
            href="/user/login">Ir a la página de inicio de sesión</a>
            `,
      icon: "error",
    });
  }
};

const removeItemToCart = async (id) => {
    try {
        const response = await fetch(`/cart/?product=${id}`, {
            method : "DELETE"
        })
        
        const { ok, cart, message } = await response.json();

        if (!ok) {
            throw new Error(message);
          }

          showProductInCart(cart.products, cart.total)

    } catch (error) {
        Swal.fire({
          title: "Upps",
          html: error.message,
          icon: "error",
        });    
    }
}

const removeAllItem = async (id) => {
    try {
        const response = await fetch(`/cart/item-all?product=${id}`, {
            method : "DELETE"
        })
        
        const { ok, cart, message } = await response.json();

        if (!ok) {
            throw new Error(message);
          }

          showProductInCart(cart.products, cart.total)

    } catch (error) {
        Swal.fire({
          title: "Upps",
          html: error.message,
          icon: "error",
        });    
    }
}


window.onload = function () {
  $("btn-cart") &&
    $("btn-cart").addEventListener("click", async function (e) {
      try {
        const response = await fetch("/cart");
        const { ok, cart, message } = await response.json();

        if (ok) {
          if (cart.products.length) {
            $("cart-body").innerHTML = `
            
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
                          $ <span id='showTotal'></span> 
                          </div>
                          </caption>
                    </table>
                    `;
                    showProductInCart(cart.products, cart.total)
           
          } else {
            $("cart-body").innerHTML = `
                    <div class="alert alert-warning" role="alert">
                        No hay productos en el carrito.
                    </div>
                  `;
          }

        } else {
          throw new Error(message);
        }
      } catch (error) {
        Swal.fire({
          title: "Upps",
          html: error.message,
          icon: "error",
        });
      }
    });
};
