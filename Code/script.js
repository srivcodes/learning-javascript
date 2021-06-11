// var likeveggie = true;

//  var myNum = 70;
// if(likeveggie) {
// document.write("you shall live longer");
// }else{
//     document.write("start eating healthy");
// }

// var myAge= 22;

// if(myAge <18 && myAge>5){
//     document.write("you're a kid");
// }else if(myAge > 20){
//     document.write("congrats!..you pay taxes now!");
// }else if(myAge > 10){
//     document.write("you are over 10");
// }else{
// document.write("not over 10");
// }

// var age=22;

// if(age>=18 && age<=30){
//     document.write("ALLOWED TO THE PARTY!")
// }else{
//     document.write("NO PARTY FOR YOU")
// }

// var age = 5;

// while(age<10){
//     console.log("Allowed!");
//     console.log(age);
//     age++;
// }

// console.log("you are now over 10");

// var links = document.getElementsByTagName("a");

// for(i=1;i<=links.length;i++){
// console.log("this is link number" + i);
// }
// document.write("all links now looped");
// for(age = 5; age<10;age++){ 
//     console.log("NO PARTY FOR YOU");
// }document.write(" PARTY FOR YOU");

// for(i=0;i<10;i++){

//     if(i===5 || i===6){
//         continue;
//     }
//     console.log(i);

//     if(i === 7){
//         break;
//     }
// }
// console.log("broken from line 57");

// FUNCTIONS

// function average(a,b){
//     var avg = (a+b)/2; //local variable
//     console.log(avg);
//     return avg;
// }
// var result = average(8,9);//global varable
// console.log("result is " + result);

// const obj = {name: "Prateek", occupation: "Software Engineer"}
// let obj = {name: "sriv" , occupation:"xyz" }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// obj.name = "srividya";
// console.log(obj.name);

// var mysstring ="hello this is srividya venki";

// if (mysstring.indexOf("venki") === -1){
//     console.log("nah");
// }else{
//     console.log("duh it's @ " + mysstring.indexOf("venki") );
// }

// var str ="hello to anyone reading tis";

// var str2 = str.slice(5,15);

// console.log(str2);

// var str3 = "anda, doodh, honey, cheese, panneer";
// console.log(str3.slice(","));

// console.log("i am from script.js");

// const age = 22;
// const name = "SriVi";

// const a= 5;
// const b= 10;

// console.log("golu"*"10");

// const smarties = 50;
// const kids =3;

// const eachgets = Math.floor(smarties/kids);

// console.log(`each kid gets ${eachgets}`);

// const remains = smarties % kids ;

// console.log(remains);

// const person = {
//     name: "prateek",
//     age: 10,
//     country:"India"
// };

// let isDraw = false;
// console.log('it works!');

// function calculateBill(amount,tax=30,tip){
//     console.log('I am running calculateBill');
//     const total = (amount * tax)+tip;
//     // console.log(Math.ceil(total));
//     return total;

// }

// calculateBill(100,2);

// const myTotal = calculateBill(100,2);

// const myTotal2 = calculateBill(200,undefined,20);

// console.log(`final bill is ${myTotal2}`);

// // const name = "srivee"

// function sayHiTo(name){
//     console.log(`greetings to ${name}`);
// }
// const greeting = sayHiTo("sriveeeee");

// function doctorize(name){
//     return(`Dr. ${name}`);
// }
// function yell(name = "Bean"){
//     return(`HEY ${name.toUpperCase()}` )
// }


// ways to write a function 

// function doctorize(name){
//     return(`Dr. ${name}`);
// } 

//Anonymous function
// function (name){
//     return(`Dr. ${name}`);
// }

//function expression
// const doctorize = function (name){
//     return(`Dr. ${name}`);
// };

// arrow functions 

// const inchtocm =  inches => inches * 2.54;


// const addtwonos = (num1,num2) => num1+num2;

// const circum = radius => 2*3.24+radius;

// returning an object using arrow

// function babyname(first,last){
//     const baby={
//         name: `${first} + ${last}`,
//         age: 0.00001
//     }
//     // return baby;
//     console.log("memeee");
// }

// const babyname = (first,last) => ({ name: `${first} + ${last}`,  age: 0.00001  })

// IIFE 
// (function(age){
//     console.log("running an IIFE");
//     console.log(`my age is ${age}`)
// })(22);

// Methods 
// const details = {
//     name: "SriVi",
//     age: function(){
//         console.log("my age is 22");
//     }
// }

// callback functions 

// const button = document.querySelector('.clickMe');
// // console.log(button);
// button.addEventListener('click', babyname);

// setTimeout(()=> {console.log("time to sleep!");},1000);

// Scopes!! 

// Hoisting 
// SayHi();

// function SayHi(){
//     console.log(`hello`)
// }

// closures 
      // function outer(){
        //     const outerVar = "I am outer Var";
        //     function inner(){
        //         const innerVar = 'I am inner Var';
        //         console.log(innerVar);
        //         console.log(outerVar);
        //     }
        //     return inner;
        // }

        // const innerFn = outer();
        // innerFn();

        // function greet(greeting = ''){
        //         const myGreet = greeting.toUpperCase();
        //         return function(name){
        //             return`${greeting}${name}`;
        //         }
        // }

        // const hello = greet("hello");
        // const hey = greet("heyy!");

        // console.log(hello("golu"));
        // console.log(hey("golu"));

        
        // function Game(name){
        //     let score = 0;
        //     return function win(){
        //         score ++;
        //         return `your game ${name} score is ${score}`;
        //     }
        // }

        // const cricket = Game("cricket");
        // const skating = Game("skating");

// const p = document.querySelector('p');
// const divs = document.querySelector("div");
// const heading = document.querySelector('h2');
// console.log(p);
// console.log(divs);
// heading.textContent = "Meet, this is a golu"
// console.dir(heading.textContent);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const howManyPizza = document.querySelector(".pizza");
// console.log(howManyPizza.textContent);
// howManyPizza.textContent = `${howManyPizza.textContent} !  `;

// howManyPizza.insertAdjacentText("beforeend","!");

// classes! 
// const pic = document.querySelector(".nice");
// pic.classList.add("open");
// pic.classList.toggle("round");
// console.log(pic.classList);

// function toggleround(){
//   pic.classList.toggle("round");
// }
// pic.addEventListener("click",toggleround);

// pic.alt = "Dog";
// pic.width = 200;

// console.log(pic.alt);

// const paragraphs = document.createElement('p');
// // console.log(paragraphs);
// paragraphs.textContent = "Your childhood teacher did not wrong you when they taught you that there should be three, or four, or five sentences in a paragraph. It is important to understand, however, that the aim in teaching this was not to impart a hard-and-fast rule of grammar, drawn from an authoritative-but-dusty book. The true aim of this strategy was to teach you that your ideas must be well supported to be persuasive and effective.";
// paragraphs.classList.add("para1");
// console.log(paragraphs);

// const images = document.createElement('img');
// images.src = "https://source.unsplash.com/random/300x300";
// images.alt = "random pic generator";
// // console.log(images);

// const divs = document.createElement('div');
// divs.classList.add("wrapper");
// divs.textContent="I am peppa pig. this is george!"
// // console.log(divs);

// const heading = document.createElement('h2');
// heading.textContent="Spongebob Squarepants";
// divs.insertAdjacentElement("afterbegin",heading);

// const lists = document.createElement('ul');
// const li = document.createElement('li');
// li.textContent = "bread";
// lists.appendChild(li);
// document.body.insertAdjacentElement("afterbegin",lists);


// divs.appendChild(paragraphs);
// // document.body.append(divs);
// divs.appendChild(images);
// console.log(divs);
// document.body.appendChild(divs);

// 

// const srivi = document.querySelector('.srivee');
// console.log(srivi);
// console.log(srivi.children);
// console.log(srivi.childNodes);