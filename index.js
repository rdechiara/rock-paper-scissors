const moves = ['rock', 'paper', 'scissors'];

function randomIntNumber(start=0, end = 1)
{
    return start + Math.floor(Math.random() * (end -start));
}

function computerPlay()
{
    const cpu_choice = moves[randomIntNumber(0,2)];
    return cpu_choice;
}

function userPlay()
{
    let user_choice = undefined;
    do
    {
        user_choice = prompt("Rock, Paper or Scissors?", 'rock').toLowerCase();
    }
    while(!moves.includes(user_choice));

    return user_choice;
}

function playRound(playerSelection, computerSelection)
{
    let result = `You win! ${playerSelection} beats ${computerSelection}!`;

    if(playerSelection === 'rock' && computerSelection === 'paper' ||
       playerSelection === 'paper' && computerSelection === 'scissors' ||
       playerSelection === 'scissors' && computerSelection === 'rock')
    {
        result = `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
    else
    {
        if(playerSelection === computerPlay)
        {
            result = 'Tie!';
        }
    }
    
    return result;
}