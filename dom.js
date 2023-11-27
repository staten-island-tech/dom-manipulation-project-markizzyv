



const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
    imgs: document.querySelector(".card-img"),
    para: document.querySelector(".card-desc"),
    gallery: document.querySelector(".gallery"),
    removebtn: document.querySelectorAll(".btn")


    //submitbtn: document.getElementById("submit"),
   
    //para: document.querySelector(".card-desc")

// grab the text input
// grab ALL the h2s
};
//no refresh


function addCard () {

let inputTitle = DOMSelectors.firstName.value
let inputImg = DOMSelectors.imgs.value
let inputDesc = DOMSelectors.para.value



    document.querySelector(".gallery").insertAdjacentHTML(
       "afterbegin",
        `
        <div class ="card">
        <h2 class ="card-title>${inputTitle}</h2>
        <img src ="${inputImg}">
        <p class ="card-desc">${inputDesc}</p>
        <button class ="btn">REMOVE</button>
        </div>
        `
    );

    document.querySelectorAll(".btn").forEach(removebtn => {
        removebtn.addEventListener("click", function () {
            removebtn.parentNode.remove()
        })
    })

};

DOMSelectors.form.addEventListener("submit", (event) => {
    event.preventDefault();

addCard ();
});
