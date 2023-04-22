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


