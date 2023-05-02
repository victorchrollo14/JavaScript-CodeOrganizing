const Hero = (name, level, jutsu, clan) =>{
    
    const tagLine = () =>{
        return `${name}, Says hello`;
    }

    // since 'clan' is not returned it becomes a private variable;
    return {name, level, jutsu, tagLine};
}

const Naruto = Hero("Naruto", 2, "Rasengan", "Uzumaki");
const Sasuke = Hero("Sasuke", 3, "Chidori", "Uchiha");

console.log(Naruto.tagLine());
