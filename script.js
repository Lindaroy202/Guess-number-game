'use strict';

/* DOM: Document Object Model.
It allows JS to access HTML elements and styles to manipulate them. And also to change CSS files in JS
*/
/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value);
 */


// The secret number .
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// To have a number between 1 and 20 Math.random()*20 and the result will never include 20 it might include 19.999 and to elevate it we add 1(Math.trunc(Math.random() *20)+1;)


// setting our score because each time there is a wrong guess the score should decrease by 1
let score = 20;

let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


// Event on check button

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);// the number function converts a string to a number

    // When there is no input.
    if (!guess) {
        // any value in the condition part will always be evaluated to a boolean
        
        //document.querySelector('.message').textContent = 'No number';
        displayMessage('NO number!')


        // When player wins.
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = 'Correct Number!'
        displayMessage('Correct Number');

        document.querySelector('.number').textContent = secretNumber;
        // the the player wins then we declare the secret number

        document.querySelector('body').style.backgroundColor = '#60b347'; // to set background to green when player wins
        document.querySelector('.number').style.width = '30rem' // when ever we are manipulating style we need to specify a string.


        //when the player wins the game we need to show the high score. if the current score > than the highest score that we already had then the high score will become the new current score
        if (score > highScore) {
            highScore = score;

            document.querySelector('.highscore').textContent = highScore
        }

       // when guess is wrong
    }else if(guess !== secretNumber){
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!'

            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!')

            score--; // this will decrease the score
            document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = 'You lost the game!'

            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0;
        }

    }


    /*      // When the guess is too high   
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!'
            score--; // this will decrease the score
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0;
        }

    }

    // When guess is too low
    else if (guess < secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!'
            score--; // this will decrease the score
            document.querySelector('.score').textContent = score;


        }else {
            document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0;
        }


    } */

});


/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

*/


// this is to click on the again button to restart the game if the player either looses or wins.
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //document.querySelector('.message').textContent = 'Start guessing...!'

    displayMessage('Start guessing...!'
    )

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';


    document.querySelector('body').style.backgroundColor = '#222'; // to set background to green when player wins
    document.querySelector('.number').style.width = '15rem' // when ever we are manipulating style we need to specify a string.


})

