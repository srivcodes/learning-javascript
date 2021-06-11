console.log("works!");

const buttons = document.querySelector(".buttons");
const coolbtn = document.querySelector(".cool");
// function clickback(){
//     console.log("clicked!!");
// }

const clickback = () => console.log("clicked");

buttons.addEventListener("click",clickback);
// buttons.addEventListener("click", function(){
//     console.log("clicked!");
// })
coolbtn.addEventListener("click",clickback);

buttons.removeEventListener("click", clickback);

// Listen on multiple items 
// console.log(buybtn);
// buybtn.forEach(function(onebutton){
//     console.log("HEY!");
//     onebutton.addEventListener("click",clickback);
// })

// buybtn.forEach(button => button.addEventListener("click", () => {console.log("you clicked")}));

const buybtn = document.querySelectorAll("button.buy");

function clickhandler(event){
    // console.log("you clicked the button");
    console.log(parseFloat(event.target.dataset.price) );
}

buybtn.forEach(function(onebtn){
onebtn.addEventListener("click",clickhandler);
});