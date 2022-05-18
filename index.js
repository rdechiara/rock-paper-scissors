const moves = ['Rock', 'Paper', 'Scissors'];

function randomIntNumber(start=0, end = 1)
{
    return start + Math.floor(Math.random() * (end -start));
}
function computerPlay()
{
    const cpu_choice = moves[randomIntNumber(0,2)];
    return cpu_choice;
}