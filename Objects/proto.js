// Constructor functions

function Hero(name, level){
    this.name = name;
    this.level = level;
}

// Initializing Uzumaki clan constructor
function Uzumaki(name, level, ability1, jutsu){
    // chain constructor with call
    Hero.call(this, name, level);

    // Adding property
    this.ability1 = ability1;
    this.jutsu = jutsu;
    this.clan = "Uzumaki";
}

//Initializing Uchiha clan constructor
function Uchiha(name, level, ability1, jutsu){
    Hero.call(this, name, level);

    this.ability1 = ability1;
    this.jutsu = jutsu; 
    this.clan = "Uchiha";
}

Uzumaki.prototype.greet = function(){
    return `${this.name} Says hi`;
}

// methods are not linked using call()
// need to use Object.setPropertyOf() 
// to link properties of Hero to Uzumaki and sasuke constructor.
Object.setPrototypeOf(Uzumaki.prototype, Hero.prototype);
Object.setPrototypeOf(Uchiha.prototype, Hero.prototype);


// defining constructor method on prototype
Hero.prototype.greet = function(){
    return `${this.name} says hello.`;
}

Uzumaki.prototype.attack = function(){
    return `${this.name} special attack is ${this.jutsu}`;
}

Uchiha.prototype.attack = function(){
    return `${this.name} special attack is ${this.jutsu}`;
}


// creating clan  Instances
let naruto = new Uzumaki("Naruto", 1, "lot of chakra", "Rasengan");
let sasuke = new Uchiha("Sasuke", 2, "The Sharingan", "Chidori");


console.log(Object.getPrototypeOf(naruto));
console.log(naruto.greet());
console.log(naruto.attack());
console.log(sasuke.greet());
console.log(sasuke.attack());



