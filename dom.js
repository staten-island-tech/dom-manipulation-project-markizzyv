


 

const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
    imgs: document.querySelector(".card-img"),
    para: document.querySelector(".card-desc"),
    //submitbtn: document.getElementById("submit"),
    albumnameForm: document.getElementById("first-Name"),
    albumimgForm: document.getElementById("img"),
    albumdescForm: document.getElementById("p")

    //para: document.querySelector(".card-desc")

// grab the text input
// grab ALL the h2s
};
//no refresh




DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);

  /*    DOMSelectors.h2s.forEach(
        (el)=> el.textContent = DOMSelectors.firstName.value
    );
    let inputDesc = DOMSelectors.para.value
    DOMSelectors.cardDesc.insertAdjacentHTML("beforebegin", 
    `
    <p>${inputDesc}</p>
    `)
    let inputIMG = DOMSelectors.imgs.value
    document.querySelector(".gallery").insertAdjacentHTML("afterbegin", 
    `
    <div class="card">
    <img src ="${inputIMG}"> 
    ` 

    
    ); */

    
function addGallery() {
const gallery = {
    inputTitle: DOMSelectors.firstName.value,
    inputIMG: DOMSelectors.imgs.value,
    inputDesc: DOMSelectors.para.value,

}
return gallery
}



    let inputTitle = DOMSelectors.firstName.value
    let inputIMG = DOMSelectors.imgs.value
    let inputDesc = DOMSelectors.para.value


document.querySelector(".gallery").insertAdjacentHTML("afterbegin", 
`
<div class="card">
<h2 class= "card-title">${inputTitle}</h2>
<img src="${inputIMG}">
<p class="card-desc">${inputDesc}</p>
</div>
`);

});





 

 
function remove () {
const Div = document.getElementById("divgallery");
const parent = Div.parentNode;
parent.removeChild(Div)
return Div
}

