const Hero = (name, level, jutsu, clan) =>{
    const name = name;
    const level = level;
    const jutsu = jutsu;
    const clan = clan;

    return {name, jutsu, clan};
}

const Naruto = Hero("Naruto", 2, "Rasengan", "Uzumaki");
const Sasuke = Hero("Sasuke", 3, "Chidori", "Uchiha");

console.log(Naruto.clan);