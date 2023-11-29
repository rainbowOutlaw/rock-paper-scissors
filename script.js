
const CHOICES = ['rock', 'paper', 'scissors'];

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

function getResult(){
    let result = playRound(prompt('Select rock paper or scissors').toLowerCase(), getComputerChoice());
    while(!result){
        result = playRound(prompt('Select rock paper or scissors').toLowerCase(), getComputerChoice());
    }
    console.log(result);
    return result;
}

function game(){
    let count = 0;
    let w = 0, l=0;
    while(count < 5){
        let result = getResult();
        if(result.includes('won')){
            w++;
        }else{
            l++;
        }
        count++;
    }
    if(w > l){
        console.log('Congrats you won the game.');
    }else{
        console.log('You lost the game. Better luck next time');
    }
}

game();
