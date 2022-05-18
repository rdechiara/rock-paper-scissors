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