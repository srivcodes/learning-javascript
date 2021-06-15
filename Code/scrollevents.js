// console.log("works");

const terms = document.querySelector(".terms-and-conditions");
const button = document.querySelector(".accept");

function obCallback(payload){
    if(payload[0].intersectionRatio === 1){
        button.disabled = false;
        ob.unobserve(terms.lastElementChild);
    }
    // }else{
        // button.disabled = true;
    // }
}

const ob = new IntersectionObserver(obCallback, {root: terms , threshold: 1});

ob.observe(terms.lastElementChild);

// terms.addEventListener("scroll", (event) => {console.log(event.currentTarget.scrollTop);});