const DOMSelectors = {
    form: document.querySelector("#form"),
    gallery: document.querySelector("card"),
} 

function remove (){
    DOMSelectors.card.forEach
        (el)= el.removeButton = DOMSelectors.card.value
}



DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
        (el)=> el.textContent = DOMSelectors.firstName.value
    );
}); 

