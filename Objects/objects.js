
// Excercise 1
function Books(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return (`${title} by ${author}, ${pages} pages, ${read}`);
    }

}

const book1 = new Books("Rudest Book Ever", "Swetabh Gangwar", 300, "read");
const book2 = new Books("Behave", "Robert Sapalowsky", 600, "not read yet");

console.log(book1.info());
console.log(book2.info());

let x = new Object();
console.log(Object.getPrototypeOf(x));

let y = []
console.log(y.__proto__.__proto__ === Object.prototype);