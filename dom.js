const DOMSelectors = {
    form: document.querySelector("#form"),
    gallery: document.querySelector("card"),
} 

function remove(){
    document.querySelector
}

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
        (el)=> el.textContent = DOMSelectors.firstName.value
    );
}); 

