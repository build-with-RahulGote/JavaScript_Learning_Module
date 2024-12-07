let randoNumber=(parseInt(Math.random()*100+1));
 
const submit=document.getElementById('subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaing=document.querySelector('.lastResult');
const LoworHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');
const p=document.createElement('p');


let prevguess=[];
let numguess=1;

let playGame=true;

if(playGame)
{
    submit.addEventListener('click',function(event)
{
    event.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuss(guess)
});
}

function validateGuss(guess)
{
    if(isNaN(guess))
    {
        alert(`Please enter valid number`)
    }

    else if("")
    {
        alert(`Please enter valid number`)
    }
    else if(guess < 1)
     {
            alert(`Please enter more than 1 number`)
     }
     else if(guess > 100)
        {
            alert(`Please enter  less than 100 number`)
        }
        else{
            prevguess.push(guess);
            if(guess===randoNumber)
            {
                displayGuess(guess);
                displaymessage(`Congratulations! You guessed it correctly!`);
                endGame();
    
            }
            else
            {
                displayGuess(guess)
                checkGuess(guess)
            }

            if (numguess > 10) {
                displaymessage(`Game Over! The random number was ${randoNumber}.`);
                endGame();
            }
        }

}

function checkGuess(guess)
{
    if (guess < randoNumber) {
        displaymessage(`The number is too low.`);
    } else if (guess > randoNumber) {
        displaymessage(`The number is too high.`);
    }
}

function displayGuess(guess)
{
    userInput.value = '';
    guessSlot.innerHTML +=`${guess},`
    numguess++;
    remaing. innerHTML=`${11-numguess}`
}
function displaymessage(message)
{
    LoworHi.innerHTML=`<h2>${message}</h2>`
}

function endGame()
{
    userInput.value = '';
    userInput.disabled = true; 
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
   
    
    newGame();
}

function newGame()
{
    LoworHi.innerHTML = '';
    const newButton=document.querySelector('#newgame');
    newButton.addEventListener('click',function(event){
         randoNumber=parseInt(Math.random()*100+1);
         prevguess=[];
         numguess=1;
         guessSlot.innerHTML='';
          remaing. innerHTML=`${11-numguess}`;
          userInput.disabled = false;
          startOver.removeChild(p)
         
          playGame=true;


    });
}




