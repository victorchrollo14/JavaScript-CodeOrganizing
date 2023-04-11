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
    form.style.display = "flex";
    main.classList.add("blur");
}

function hideForm(e){
    if (e.target !== newBookBtn){
        form.style.display = "none";
        main.classList.remove("blur");
    }
    
    
}


newBookBtn.addEventListener("click", showForm);
main.addEventListener("click", hideForm);



