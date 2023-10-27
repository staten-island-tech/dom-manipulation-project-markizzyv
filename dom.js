const form = {
    form: document.querySelector("#form"),
    
} 
console.log(form)

const DOMSelectors = {
    form: document.querySelector("form"),
    firstName: document.querySelector("first-name"),
    h2s: document.querySelector("h2s")
}


/* 
function remove(){
    document.querySelector
} */




DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();

    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
        (el)=> el.textContent = DOMSelectors.firstName.value
    );
});  
 


/* const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
// grab the text input
// grab ALL the h2s
};

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
        (el)=> el.textContent = DOMSelectors.firstName.value
    );
    // one equals for the element text content
}); 
 */
