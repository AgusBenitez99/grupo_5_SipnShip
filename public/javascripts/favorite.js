
    const favoriteChange = async function (e, userId, productId) {
      e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/toggle-favorite?userId=${userId}&productId=${productId}`)
            
            const { ok, message } = await response.json();
    
             if (ok) {

                if (e.target.classList.contains("far")) {
                    e.target.classList.remove("far")
                    e.target.classList.add("fa-solid")
                } else {
                    e.target.classList.remove("fa-solid")
                    e.target.classList.add("far")
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
        }          

