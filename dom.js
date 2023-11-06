


 

const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
    imgs: document.querySelector(".card-img")

// grab the text input
// grab ALL the h2s
};
//no refresh
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
        (el)=> el.textContent = DOMSelectors.firstName.value
    );
  




   /* event.preventDefault()
    console.log(DOMSelectors.secondName.value); 
    DOMSelectors.imgs.forEach(
        (el) => el.textContent = DOM.secondName.value
    ); 
  */
    // one equals for the element text content
}); 
 DOMSelectors.imgs.addEventListener("submit", function() {
    DOMSelectors.imgs.forEach((imgs) => {
        imgs.addEventListener("submit", function () {
            (imgs) => imgs.innerHTML = DOMSelectors.secondName.value
        });
    });
})
  

/* const addCard 
const confirm
const clearInput
*/






const addCard = document.getElementById('gallery');
addCard.DOMSelectors.secondName = document.querySelectors('.card-img')
addCard.DOMSelectors.h2s(
    (DOMSelectors.firstName) = console.log(addCard) 
);


 const confirmCard = document.getElementById('btn2');

confirmCard.addEventListener('click', function() {
    modalContainer.style.display = flex; 

 
});

const removeCard = document.getElementbyID('btn1');

removeCard.addEventListener('click', function(){
    modalContainer.style.display = 'none';
}); 
 
 






