const DOMSelectors = {
    form: document.querySelector("#form"),
    gallery: document.querySelector("card"),
} 



DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
        (el)=> el.textContent = DOMSelectors.firstName.value
    );
}); 

