let myLibrary = [];

const newBookBtn = document.querySelector(".new-book");
const form = document.querySelector(".form");
const main = document.querySelector(".main");
const bookList = document.querySelector(".book-list");
const bookCard = document.querySelector('.book');

function showForm(e){
  form.style.transform = "scale(1)";
}

function hideForm(e){
  if (e.target !== newBookBtn && e.target !== form && e.target.parentElement !== form && e.target.parentElement.parentElement !== form){
      form.style.transform = "scale(0)";
  }
  
  
}

function Book(title, author, pages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
  display(myLibrary);
}

function display(Library){
    let bookSection, bkName, bkAuthor, bkPages, readBtn, removeBtn;
    
    // removing all the old data
    while (bookList.firstChild) {
      bookList.removeChild(bookList.firstChild);
    }

    // Adding new Data
    for (let book of Library){
        bookSection = document.createElement("section");
        bkName = document.createElement("h1");
        bkAuthor = document.createElement("h1");
        bkPages = document.createElement("h2");
        readBtn = document.createElement("button");
        removeBtn = document.createElement("button");

        // adding classnames
        bookSection.classList.add("book");
        bkName.classList.add("title");
        bkAuthor.classList.add("author");
        bkPages.classList.add("no-pages");
        readBtn.classList.add("read-unread", "read-btn");
        removeBtn.classList.add("rm-btn", "remove");
        
        // adding content
        bkName.textContent = `"${book.title}"`;
        bkAuthor.textContent = book.author;
        bkPages.textContent = `${book.pages} Pages`;
        removeBtn.textContent = "Remove";
        if(book.isRead){
          readBtn.textContent = "Read";
        }
        else {
          readBtn.textContent = "Unread";
        }

        // appending Childnodes
        bookSection.appendChild(bkName);
        bookSection.appendChild(bkAuthor);
        bookSection.appendChild(bkPages);
        bookSection.appendChild(readBtn);
        bookSection.appendChild(removeBtn);
        bookList.appendChild(bookSection);  
    }

}


newBookBtn.addEventListener("click", showForm);
main.addEventListener("click", hideForm);

const book1 = new Book("Rudest Book Ever", "sweatabh", 131, true);
const book2 = new Book("Behave", "Robert Sapalowsky", 1200, false);

addBookToLibrary(book1);
addBookToLibrary(book2);




