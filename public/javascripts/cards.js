

$('card-heart').addEventListener("click", e => {
    alert 
    if (heart.classList.contains("far fa-heart")) {
        heart.classList.remove("far fa-heart")
        heart.classList.add("fa-solid fa-heart")
    } else {
        heart.classList.remove("fa-solid fa-heart")
        heart.classList.add("far fa-heart")
    }
})
