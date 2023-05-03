// composition vs inheritance
// Inheritance - when you design your objects around what they are;
// for example:

/*  
    Dog
        .poop()
        .bark()
    Cat
        .poop()
        .meow()
    * duplication we don't need that
    Animal 
        .poop()  
        
        Dog
            .bark()
        Cat
            .meow()
    
    Robot
        .drive()
        
        ClearningRobot
            .clean()
        murderRobot
            .kill()
    
    * what if we need a MurderRobotDog that can drive, kill and bark but cannot poop.
         * the above example would be screwed since we need 
          1) .drive() from Robot, 
          2) .kill() from murderRobot
          3) .bark() from Dog and no need for poop()
    * we end up in a banana gorilla problem where you request a banana, but you get a 
          gorilla holding a banana with the whole jungle 🤣🤣🤣.
    
    * SOLUTION: make use of composition;
    
*/


// Composition - When you design your objects/types around what they do
// for example
/* 
    dog = pooper + barker
    Cat = pooper + meower
    cleaningRobot = driver + cleaner
    murderRobot = driver + murderer
    murderRobotDog = murderer + driver + barker

*/


const barker = (state) => {
    const bark = () => {
        console.log(`woof woof, I am ${state.name}`);
    }

    return {bark};
}


const meower = (state) => {
    const meow = () => {
        console.log(`meow meow, I am ${state.name}`)
    }

    return {meow};
}


const driver = (state) => {
    const drive = () => {
        state.position = state.position + state.speed;
        return state.position;
    }

    return { drive };
}


const pooper = (state) => {
    const poop = () => {
        console.log(state.name + ` is a pooper`);
    }

    return { poop };
}


const murderer = (state) => {
     const murder = () => {
        console.log(`${state.name} assigned to murder ${state.enemy}`);
     }

     return { murder };
}


const Dog = (name) => {
    const state = {
        name: name,
    }

    return Object.assign({}, barker(state), pooper(state));
}


const murderRobotDog = (name, speed, enemy) => {
    const state = {
        name: name,
        speed: speed,
        enemy: enemy,
        position: 0
    }

    return Object.assign({}, barker(state), murderer(state), driver(state));
}



const rocky = Dog("rocky");
rocky.bark();
rocky.poop();

const hippo = murderRobotDog("hippo873.1", 30, "tiger");
hippo.murder();
hippo.bark();
console.log(hippo.drive());