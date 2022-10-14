const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click",()=>{
        removeactiveClasses()
        card.classList.add("active")
    })
})

function removeactiveClasses(){
    cards.forEach((card) =>{
        card.classList.remove("active")
    })
}