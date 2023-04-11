let myLibrary = [];

const newBookBtn = document.querySelector(".new-book");
const form = document.querySelector(".form");
const main = document.querySelector(".main");

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}


function showForm(e){
    form.style.transform = "scale(1)";
}

function hideForm(e){
    if (e.target !== newBookBtn && e.target !== form && e.target.parentElement !== form && e.target.parentElement.parentElement !== form){
        console.log(e.target.parentElement);
        form.style.transform = "scale(0)";
    }
    
    
}


newBookBtn.addEventListener("click", showForm);
main.addEventListener("click", hideForm);



