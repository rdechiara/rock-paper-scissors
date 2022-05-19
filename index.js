const MOVES = ['rock', 'paper', 'scissors'];

function randomIntNumber(start=0, end = 1)
{
    return start + Math.floor(Math.random() * (end -start));
}

function computerPlay()
{
    return MOVES[randomIntNumber(0,2)];
}

function userPlay()
{
    let userChoice = undefined;
    do
    {
        userChoice = prompt("Rock, Paper or Scissors?", 'rock').toLowerCase();
    }
    while(!MOVES.includes(userChoice));

    return userChoice;
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
        if(playerSelection === computerSelection)
        {
            result = 'Tie!';
        }
    }
    
    return result;
}

function playGame()
{
    const rounds = 5;
    let computerWins = 0;
    let userWins = 0;
    let ties = 0;

    for(let i = 0; i < rounds; i++)
    {
            let playerSelection = userPlay();
            let computerSelection = computerPlay();

            let result = playRound(playerSelection, computerSelection);

            console.log(result);

            if(result === `You win! ${playerSelection} beats ${computerSelection}!`)
            {
                ++userWins;
            }
            else if(result === `You lose! ${computerSelection} beats ${playerSelection}!`)
            {
                ++computerWins;
            }
            else
            {
                ++ties;
            }
    }

    if(userWins > computerWins)
    {
        console.log('You win!');
    }
    else if(computerWins > userWins)
    {
        console.log('Computer wins!');
    }
    else
    {
        console.log('It\'s a tie!');
    }
}