
const CHOICES = ['rock', 'paper', 'scissors'];
let score = 0;
let rounds = 0;
const currScore = document.querySelector('.curr-score');
const msg = document.querySelector('.message');
const finalResult = document.querySelector('.final-result');
currScore.textContent = score;

const buttons = document.querySelectorAll('button');

function getComputerChoice(){
    const rand = Math.floor((Math.random() * 3));
    return CHOICES[rand];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return null;
    }

    switch (computerSelection){
        case 'rock':
            if(playerSelection === 'paper'){
                return 'You won! Paper beat Rock';
            }else if(playerSelection === 'scissors'){
                return 'You lost! Rock beat Scissors';
            }
        case 'paper':
            if(playerSelection === 'rock'){
                return 'You lost! Paper beat Rock';
            }else if(playerSelection === 'scissors'){
                return 'You won! Scissors beat Paper';
            }
        case 'scissors':
            if(playerSelection === 'rock'){
                return 'You won! Rock beat Scissors';
            }else if(playerSelection === 'paper'){
                return 'You lost! Scissors beat Paper';
            }
    }


}

function onChoosing(e){
    const display_result = playRound(e.target.classList.value, getComputerChoice());
    if(!display_result){
        msg.textContent = '';
        return
    };

    if(display_result.includes('won')){
        score += 1;
        rounds += 1;
        msg.textContent = display_result;
    }else if(display_result.includes('lost')){
        rounds += 1;
        msg.textContent = display_result;
    }
    currScore.textContent = score;
    if(rounds == 5){
        buttons.forEach((button) => {
            button.removeEventListener('click', onChoosing)
        })
        if(score >= 3){
            finalResult.textContent = 'Congrats!!! You Won The Game';
        }else{
            finalResult.textContent = 'Sorry!!! You lost';
        }
    }
}




buttons.forEach((button) => {
    button.addEventListener('click', onChoosing)
})
