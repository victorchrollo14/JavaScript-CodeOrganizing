// Factory functions are plain old javascript functions that 
// return objects to use in our code.
// It is a powerful way to Organize code and maintain it.

const personFactory = (name, age) =>{
    const sayHello = () => {
        console.log(`${name} says hi`)
    }

    return {name, age, sayHello};
}

const Victor = personFactory("Victor", 20);
const Naruto = personFactory("Naruto", 40);

console.log(Victor.name, Victor.age);
console.log(Naruto.sayHello())

const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

// logging all of these variables might be a useful thing to do,
// but doing it like this can be somewhat confusing.
console.log(name, color, number, food); // Maynard red 34 rice

// if you simply turn them into an object with brackets,
// the output is much easier to decipher:
console.log({name, color, number, food});


const Player = (name, level) =>{
    let health = level * 2;
    const getLevel = () => {
        return level;
    }

    const getName = () => {
        return name;
    }

    const die = () => {
        console.log(`OH OH, Game Over ${name} is dead`);
    }

    const damage = (x) => {
        health -= x;
        if (health <= 0){
            die();
        }
    }

    const attack = (enemy) => {
        if (level < enemy.getLevel()){
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`);
            console.log(`${name} has ${health} hp remaining`);
        }
        if (level > enemy.getLevel()){
            enemy.damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
            console.log(`${enemy.getName()} has ${health} hp remaining`);
        }

    }

    return {attack, damage, getLevel, getName};
}

const Luffy = Player("luffy", 4);
const kaido = Player("kaido", 10);

Luffy.attack(kaido);
Luffy.attack(kaido);

// cannot kill luffy from outside, because die() and health is a private method and property.
// Luffy.die();       
// Luffy.health -= 1000;


// Inheritance using factory functions
const target = {
    a:1,
    b:2
}

const source = {
    c:4,
    d:5,
    sayHello: () => {
        return ("hello");
    }
}

// Makes a copy of properties of source into target
Object.assign(target, source);
console.log(target.sayHello());


const Uzumaki = (name, level) => {
    const prototype = Player(name, level);
    const clan = () => {
        return `${name} is from Uzumaki clan`;
    }

    // copied all methods of Player to Uzumaki;
    return Object.assign({}, prototype, {clan});
}

const Uchiha = (name, level) => {
    const prototype = Player(name, level);
    const clan = () => {
        return `${name} is from Uchiha clan`;
    }

    return Object.assign({}, prototype, {clan});
     
}

let naruto = Uzumaki("Naruto", 2);
let sasuke = Uchiha("sasuke", 3);

console.log(naruto.getLevel(), sasuke.getName());
naruto.attack(sasuke);

console.log(naruto.clan());
console.log(sasuke.clan());








