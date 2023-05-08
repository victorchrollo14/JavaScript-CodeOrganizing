const Boxes = document.querySelectorAll('.item');
const xButton = document.querySelector('.x-sym');
const oButton = document.querySelector('.o-sym');
const choiceBtn = [xButton, oButton];
const activePlayer  = document.querySelector('.player');
const resetBtn = document.querySelector('.reset');
const startBtn = document.querySelector('.start');
const instruction = document.querySelector('.message');
let sign, botSign;
let you, Bot;
let gameOver, draw;



// music module;
const Music = (() => {
    const gameOver = new Audio("Music/gameover.mp3");
    const commonMusic =  new Audio("Music/music.mp3");
    const ting = new Audio("Music/ting.mp3");
    
    const PlayGameOver = () => {
        gameOver.play();
    }

    const PlayUsual = () => {
        commonMusic.play();
    }

    const stopUsual = () => {
        commonMusic.pause();
    }

    const PlayTing = () => {
        ting.play();
    }

    return { PlayGameOver, PlayUsual, PlayTing, stopUsual };
})();


// module to display the characters.
const Display = (() => {
    const selectSign = (btn) => {
        btn.classList.add("select");
    }

    const unselectSign = (btn) =>{
        btn.classList.remove("select");
    } 

    const displayTurn = (msg) => {
        activePlayer.innerHTML = msg;
    }

    const Message = (msg) => {
        instruction.innerHTML = `${msg}`;
    }

    const printValue = (val, box) => {
         box.innerHTML = val;
    }

    const reset = () => {
        location.reload();
    }

    return {selectSign, unselectSign, displayTurn, Message, printValue, reset};

})();

// factory function for players
const Player = (name, sign) => {
     const Sign = () => {
        return sign;
     }

     const Name = () => {
        return name;
     }

     return {Sign, Name};
   
}

// module for gameLogic
const gameControl = (() => {
    let btnSelect = false;
    let isStart = false;

    const removeEvent = () => {
        Boxes.forEach(box => {
            box.removeEventListener("click", gameControl.printOnScreen)
        })
    }

    const checkWinner = () => {
        let winCombo = [
            [0, 1, 2, 0, -80, 0],
            [3, 4, 5, 0, 0, 0],
            [6, 7, 8, 0, 80, 0],
            [0, 3, 6, -84, -2, 90],
            [1, 4, 7, 0, -2, 90],
            [2, 5, 8, 84, -2, 90],
            [0, 4, 8, 0, -2, 45],
            [2, 4, 6, 0, -2, -45]
        ];

        let winGame = false;
        let winner = '';

        winCombo.forEach(b=> {
            let square1 = Boxes[b[0]].innerText;
            let square2 = Boxes[b[1]].innerText;
            let square3 = Boxes[b[2]].innerText;
            if (square1 === square2 && square2 === square3 && square3 === square1 && square1 != ''){
                winner = square1;
                winGame = true;
                document.querySelector('.line').style.width = '300px';
                document.querySelector('.line').style.transform = 
                `translate(${b[3]}px, ${b[4]}px) rotate(${b[5]}deg)`;
            }
            
        })


        return {winGame, winner};
    }

    const checkDraw = () => {
        let draw = false;
        let i = 0;
        Boxes.forEach(box => {
            if(box.hasChildNodes()){
                i++;
            }
        })
        let check = checkWinner();

        if (i >= 9 && !check.winGame){
            console.log(i, check.winGame);
            draw = true;
        }

        return draw;
    }

   

    const getSign = (e) => {
        sign = e.target.textContent;
        botSign = sign === 'X'? 'O': 'X';
        
        // creating the players
        you = Player("You", sign);
        Bot = Player("Bot", botSign);

        // changing the design of selected button
        choiceBtn.forEach(btn => {
            if (btn === e.target){
                Display.selectSign(btn);
            }
            else {
                Display.unselectSign(btn);
            }
        })
        
        Display.displayTurn(`You Choose ${sign}`);
        Display.Message(`Click Start`);

        btnSelect = true;

        
    }

    const start = (e) => {
        isStart = true;
        
        Music.PlayUsual();

        if (btnSelect){
            choiceBtn.forEach(btn => {
                btn.removeEventListener("click", getSign);
            })

            let startMsg = "Game has Started";
            Display.Message(startMsg);
            
            if (you.Sign() === 'X'){
                Display.displayTurn(`${you.Name()}r Turn`);
            }
            else {
                Display.displayTurn(`${Bot.Name()}'s Turn`);
            }
        }
        else {
            Display.Message("Choose X or O before you start");
        }

    }

    const printOnScreen = (e) => {
        if(isStart && !e.target.hasChildNodes()){
            
            Music.PlayTing();
            if(activePlayer.innerHTML === "Your Turn"){
                Display.printValue(you.Sign(), e.target);
                Display.displayTurn(`${Bot.Name()}'s Turn`);
            }
            else {
                Display.printValue(Bot.Sign(), e.target);
                Display.displayTurn(`${you.Name()}r Turn`);
            }

            gameOver = checkWinner();
            draw = checkDraw();
            
            if(gameOver.winGame && draw === false){
                Music.stopUsual();
                Music.PlayGameOver();

                Display.displayTurn("Game Over");

                if(gameOver.winner === you.Sign()){
                    Display.Message(`${you.Name()} won`);
                }
                else {
                    Display.Message(`${Bot.Name()} Won`);
                }
                removeEvent()
                setTimeout(3000, Display.reset);

            }

            if(draw) {
                Music.stopUsual();
                Music.PlayGameOver();
                Display.displayTurn("Its a draw");
                Display.Message("Game Over");
                removeEvent()
                setTimeout(3000, Display.reset);
            }
            
        } 
        
    }

    return {getSign, start, printOnScreen};

})();


const RunGame = () => {

    choiceBtn.forEach(btn => { 
        btn.addEventListener("click", gameControl.getSign);
    })

    startBtn.addEventListener("click", gameControl.start);

    Boxes.forEach(box => {
        box.addEventListener("click", gameControl.printOnScreen);
    })

    resetBtn.addEventListener("click", Display.reset);

}

RunGame();



