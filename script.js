var allwords = [
    "BIKE",
    "SUN",
    "SEA",
    "LAKE",
    "MOUNTAIN",
    "BEACH",
    "TRACTOR",
    "QUEUE",
    "TOMATO",
    "SOUP",
    "PIZZA",
    "COOKIES",
    "CAR",
    "MASSAGE"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord()
{
    answer = allwords[Math.floor(Math.random()*allwords.length)];
}

function generateButtons()
{
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => 
        `
            <button
                class="btn btn-lg btn-primary m-2"
                id='` + letter + `'
                onClick="handleGuess('` + letter +`')"
                >
                  ` + letter + `
            </button>
        `).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter)  
{
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if(answer.indexOf(chosenLetter) >= 0){
        guessedWord();
        checkIfGameWon();
    } else if(answer.indexOf(chosenLetter) === -1){
        mistakes++;
        updateMistakes();
        checkIfGameLost();
    }
}

function checkIfGameWon()
{
    if(wordStatus === answer){
        document.getElementById('keyboard').innerHTML = 'You Won!';
    }
}

function checkIfGameLost()
{
    if(mistakes === maxWrong){
        document.getElementById('keyboard').innerHTML = 'You Lost! The word is: ' + answer;
    }
}

function guessedWord()
{
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes()
{
    document.getElementById('mistakes').innerHTML = mistakes;
    switch(mistakes)
    {
        case 1:
            document.getElementById("hangmanPic").src="./images/1.jpg";
            break;
        case 2:
            document.getElementById("hangmanPic").src="./images/2.jpg";
            break
        case 3:
            document.getElementById("hangmanPic").src="./images/3.jpg";
            break;
        case 4:
            document.getElementById("hangmanPic").src="./images/4.jpg";
            break;
        case 5:
            document.getElementById("hangmanPic").src="./images/5.jpg";
            break;
        case 6:
            document.getElementById("hangmanPic").src="./images/6.jpg";
            break;
    }
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();

