// console.log("it works!");

// get elements on the page 
const canvas = document.querySelector("#etch-a-sketch");
// const ctx =  document.getContext("2d");
var ctx = canvas.getContext('2d');
const shake = document.querySelector(".shake");
const MOVE_AMOUNT = 10;
// setting the context on the canvas 

//make height and width variables on canvas
// const width = canvas.width;
// const height = canvas.height;
const {width,height} = canvas;

//create a random x,y coordinate
let x = Math.floor(Math.random() * width);
// console.log(x);
let y = Math.floor(Math.random() * height);
// console.log(y);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 30;
let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();
// console.dir(ctx);

// writing a draw function
function draw({key}){
    hue = hue + 2;
    // ctx.strokeStyle = `hsl(${Math.random()*360},100%,50%)`;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x,y);
    // x = x-MOVE_AMOUNT;
    // y = y-MOVE_AMOUNT;
    switch (key){
        case "ArrowUp":
            y = y - MOVE_AMOUNT;
            break;
        case "ArrowDown":
            y = y + MOVE_AMOUNT;
            break;
        case "ArrowRight":
            x = x + MOVE_AMOUNT;
            break;
        case "ArrowLeft":
            x = x - MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}


// writing a handler for the keys
function handleKey(event){
    if(event.key.includes('Arrow')){
        event.preventDefault();
        draw({key: event.key});
        // console.log(event.key);
        // console.log("key is being handled");
    }
}

//listen for arrow keys
window.addEventListener('keydown', handleKey);
shake.addEventListener("click",clearCanvas);

//clear our canvas
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0,0,width,height);
    canvas.addEventListener("animationend", function(){
        console.log("done the shake!");
        canvas.classList.remove('shake');
    },{once: true});
}




