


 

const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
    imgs: document.querySelector(".card-img"),
    para: document.querySelector(".card-desc"),
    //submitbtn: document.getElementById("submit"),
   
    //para: document.querySelector(".card-desc")

// grab the text input
// grab ALL the h2s
};
//no refresh




DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
<<<<<<< HEAD
    DOMSelectors.h2s.forEach(
        (el)=> el.textContent = DOMSelectors.firstName.value
    );
 });

 DOMSelectors.para.addEventListener('click', function () {
      let inputDesc = DOMSelectors.para.value
    DOMSelectors.cardDesc.insertAdjacentHTML("beforebegin", 
    `
    <p>${inputDesc}</p>
    `);


}); 




 DOMSelectors.imgs.addEventListener("submit", function(){
    DOMSelectors.imgs.forEach((imgs)=> imgs.innerHTML = DOMSelectors.imgs.value
    );
});
=======
>>>>>>> 9f37062a919bb258643529eecd6d745c90a6efb2

  




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

