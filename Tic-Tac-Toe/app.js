const Boxes = document.querySelectorAll('.item');
const xButton = document.querySelector('.x-sym');
const oButton = document.querySelector('.o-sym');
const choiceBtn = [xButton, oButton];
const activePlayer  = document.querySelector('.player');
let sign, botSign;


// module to display the characters.
const Display = () => {
    const displaySign = () => {

    }

    const displayTurn = () => {

    }

    const displayMsg = () => {

    }

    const reset = () => {

    }

}

// module to hold selected character
const Player = (name, sign) => {
     const Sign = () => {
        return sign;
     }

     const Name = () => {
        return name;
     }

     const checkWinner = () => {

     }

     return {Sign, Name};
   
}

const Helper = (() => {
    const getSign = (e) => {
        sign = e.target.textContent;
        botSign = sign === 'X'? 'O': 'X';
        
        // creating the players
        const player1 = Player("You", sign);
        const Bot = Player("Bot", botSign);

        choiceBtn.forEach(btn => {
            btn.removeEventListener("click", getSign);
        })
    }

    return {getSign};

})();

const RunGame = () => {
    
    choiceBtn.forEach(btn => { 
        btn.addEventListener("click", Helper.getSign);
    })



}

RunGame();



