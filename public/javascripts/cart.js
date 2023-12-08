const showProductInCart = (products, total) => {
    if(products.length){
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
                                <buttonn onclick="removeItemToCart(${id})" class="btn btn-sm btn-danger ${amount === 1 && 'disabled'}"><i class="fa-solid fa-minus"></i></buttonn>
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
        $('showTotal').style.color = 'white',
        $('showTotal').innerHTML = `Total :  $ ${total}`
        $('btn-empty-cart').hidden = false
        $('btn-buy-cart').hidden = false

      }
    } else {
      $("cart-body").innerHTML = `
      <div class="alert alert-warning" role="alert">
          No hay productos en el carrito.
      </div>
    `;
    $('btn-empty-cart').hidden = true
    $('btn-buy-cart').hidden = true
    }
}

const showItemToCart = (products) => {
  sessionStorage.setItem('countCart', products.map(product => product.amount).reduce((a,b) => a + b, 0))
  $('show-count-cart').innerHTML = sessionStorage.getItem('countCart')
}

const showMessageInfo = (message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "info",
    title: message
  });
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
    sessionStorage.setItem('cart', JSON.stringify(cart))
    showProductInCart(cart.products, cart.total)

    showItemToCart(cart.products)

    showMessageInfo(message)



  } catch (error) {
    console.log(error)
    Swal.fire({
      title: "Upps",
      html:error.message,
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

          sessionStorage.setItem('cart', JSON.stringify(cart))
          showProductInCart(cart.products, cart.total)

          showItemToCart(cart.products)

          showMessageInfo(message)

    } catch (error) {
      console.log(error)
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

          sessionStorage.setItem('cart', JSON.stringify(cart))
          showProductInCart(cart.products, cart.total)
          showItemToCart(cart.products)

          showMessageInfo(message)

    } catch (error) {
      console.log(error)
        Swal.fire({
          title: "Upps",
          html: error.message,
          icon: "error",
        });    
    }
}

const emptyCart = async () => {
  try {
    const response = await fetch('/cart/all', {
      method : "DELETE"
    })

    const { ok, cart, message } = await response.json();

    if (!ok) {
        throw new Error(message);
      }

      sessionStorage.setItem('cart', JSON.stringify(cart))
      showProductInCart(cart.products, cart.total)
      showItemToCart(cart.products)

      showMessageInfo(message)
    
  } catch (error) {
    console.log(error)
    Swal.fire({
      title: "Upps",
      html: error.message,
      icon: "error",
    });  
    
  }

}


window.onload = function () {
  sessionStorage.setItem('countCart', sessionStorage.getItem('countCart') || 0);
  $('show-count-cart').innerHTML = sessionStorage.getItem('countCart')
  $('show-count-cart').hidden = false

  if(sessionStorage.getItem('cart')){
    const cart = JSON.parse(sessionStorage.getItem('cart'))
    console.log(cart)
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
         <span id='showTotal'></span> 
          </div>
          </caption>
    </table>
    `;
    showProductInCart(cart.products, cart.total)
  }
  $("btn-cart") &&
    $("btn-cart").addEventListener("click", async function (e) {
      try {
        const response = await fetch("/cart");
        const { ok, cart, message } = await response.json();

        if (ok) {
          sessionStorage.setItem('cart', JSON.stringify(cart))
          if (cart.products.length) {
            $("cart-body").innerHTML = `
            
                    <table class="table" >
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
                         <span id='showTotal'></span> 
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
        console.log(error)
        Swal.fire({
          title: "Upps",
          html: error.message,
          icon: "error",
        });
      }
    });
};
