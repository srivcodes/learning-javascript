const cardButtons = document.querySelectorAll(".cardButton");

const innerModal = document.querySelector(".modal-inner");
const outerModal = document.querySelector(".modal-outer")

function buttonHandler(event){
    // console.log("clicked!");
    const button = event.currentTarget;
    const card = button.closest('.card');
    // console.log(card);

    const imgsrc = card.querySelector("img").src;
    // console.log(imgsrc);

    const desc = card.dataset.description;
    // console.log(desc);

    const name = card.querySelector('h2').textContent ;

    innerModal.innerHTML = `
    <img src="${imgsrc.replace('200','600')} alt = "${name}" />
    <p>${desc}</p>
    `;

    outerModal.classList.add("open");

}

cardButtons.forEach(button => button.addEventListener("click",buttonHandler));

function closeModal(){
    outerModal.classList.remove("open");
}

outerModal.addEventListener("click", function(event){
// console.log(event.target);
// console.log(event.currentTarget);

const isoutside = !event.target.closest(".modal-inner");
// console.log(isoutside);
if(isoutside){
    // outerModal.classList.remove("open");
    closeModal();
}
})

window.addEventListener("keydown", (event) => { if(event.key === "Escape") {
closeModal();
}}) ;

