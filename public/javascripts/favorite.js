
    const favoriteChange = async () => {
        try {
            const response = await fetch(`http://localhost:3000/toggle-favorite?userId=3&productId=5`)
            
            const { ok, message } = await response.json();
    
             if (ok) {

                if (this.classList.contains("far fa-heart")) {
                    this.classList.remove("far fa-heart")
                    this.classList.add("fa-solid fa-heart")
                } else {
                    this.classList.remove("fa-solid fa-heart")
                    this.classList.add("far fa-heart")
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

