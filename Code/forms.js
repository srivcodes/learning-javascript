// console.log("it works!");
const anchorg = document.querySelector(".google");
// console.log(anchorg);
anchorg.addEventListener("click", function(event){
    // console.log(event);
    console.log("you clicked but prevented default");
    const change = confirm("you really want to change??");
    // console.log(change);
    event.preventDefault();
    if(change){
        window.location = event.currentTarget.href;
    }
});

const signup = document.querySelector("[name = 'signup']");

// signup.addEventListener("submit", function(event){
//     // event.preventDefault();
//     const name = console.log(event.currentTarget.name.value);
//     console.log(event.currentTarget.email.value);
//     console.log(event.currentTarget.agree.checked);
    // if(name.includes('nonu')){
    //     alert("you cannot submit this form");
    //     event.preventDefault();
    // }
// });
function logEvent(event){
    console.log(event.type);
    console.log(event.currentTarget.value);
}
signup.name.addEventListener("keyup",logEvent);
signup.name.addEventListener("keydown",logEvent);