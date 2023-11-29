
const CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    const rand = Math.floor((Math.random() * 3));
    return CHOICES[rand];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        //TODO
    }

    switch (computerSelection){
        case 'rock':
            if(playerSelection === 'paper'){
                return 'You won! Paper beats Rock';
            }else if(playerSelection === 'scissors'){
                return 'You lost! Rock beats scissors';
            }
        case 'paper':
            if(playerSelection === 'rock'){
                return 'You lost! Paper beats Rock';
            }else if(playerSelection === 'scissors'){
                return 'You won! Scissors beats Paper';
            }
        case 'scissors':
            if(playerSelection === 'rock'){
                return 'You lost! Rock beats Scissors';
            }else if(playerSelection === 'paper'){
                return 'You lost! Scissors beats Paper';
            }
    }


}

function game(){

}
