// // console.log("it works!");
// const divs = document.createElement('div');
// // console.log(divs);
// divs.classList.add("wrapper");
// document.body.appendChild(divs);

// const list = `<ul>
// <li>One</li>
// <li>Two</li>
// <li>Three</li>
// </ul>`;

// divs.innerHTML = list;
// // console.log(divs);

// const width = 250;
// const desc = "cute puppy"
// const source = `https://source.unsplash.com/random/${width}`

// const img = document.createElement('img');
// img.src = "https://source.unsplash.com/random/300x300"
// img.width = 250;
// img.height = 250;
// img.classList.add("cute");
// img.alt = "cute puppy"
// divs.appendChild(img);

// const mylist = 
// `
// <div class = "division" >
// <p>This is paragraph 1</p>
// <p>This is paragraph 2</p>
// </div>
// `
// const ulelement = document.querySelector('ul');
// // console.log(ulelement);
// ulelement.insertAdjacentHTML("afterbegin",mylist);

// const div2 = divs.querySelector('.division');
// console.log(div2);
// div2.children[1].classList.add('warning');

// div2.firstElementChild.remove();

// function namePlayerCard(name,age,height){
//  const html = `
//   <div class="playercard">
//   <h2>${name} - ${age}</h2>
//   <p> They are ${height} and ${age} years old.In dog years this person would be ${age*7}. That would be a tall Dog! </p>
//   <button class="delete" type="button">Delete</button>
//   </div>
//  `;
//  return html;
// }

// const cards = document.createElement('div');
// cards.classList.add("cardss");

// let fourcards = namePlayerCard("name 1",12,120);
//  fourcards += namePlayerCard("name 2",13,130);
//  fourcards += namePlayerCard("name 3",14,140);
//  fourcards += namePlayerCard("name 4",15,150);

// // console.log(fourcards);
// cards.innerHTML = fourcards;

// divs.insertAdjacentElement("beforebegin",cards);


// function deleteMe(event){
//      const buttonclicked = event.target;
//     console.log(buttonclicked, "clicked");
//     buttonclicked.parentElement.remove();
// }

// const buttons = document.querySelectorAll(".delete");
// buttons.forEach(button => button.addEventListener("click",deleteMe));


