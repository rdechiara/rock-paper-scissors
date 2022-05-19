const MOVES = ['rock', 'paper', 'scissors'];
let userWins = 0;
let computerWins = 0;
function randomIntNumber(start=0, end = 1)
{
    return start + Math.floor(Math.random() * (end -start));
}

function computerPlay()
{
    return MOVES[randomIntNumber(0,2)];
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

function setup()
{
    let buttons = [...document.querySelectorAll('button')];
    buttons.forEach((button) =>
    {
        button.onclick = (e) =>
        {
            let userChoice = e.target.id;
            let result = playRound(userChoice, computerPlay());
            let div = document.createElement('div');
            div.innerText = result;
            document.body.append(div);
            if(result.substring(0,8) === 'You win!')
            {
                ++userWins;
            }

            if(result.substring(0,9) === 'You lose!')
            {
                ++computerWins;
            }
            if(5 === userWins)
            {
                buttons.forEach((b) => { b.disabled = true})
                alert('Congratulations! You win the game!')

            }
            else
            {
                if(5 === computerWins)
                {
                    buttons.forEach((b) => { b.disabled = true})
                    alert('Computer wins the game!')

                }
            }


        };
    });
}
setup();