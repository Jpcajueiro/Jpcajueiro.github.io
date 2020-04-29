let userScore = 0;
let computerScore = 0;
const choices = ["Pedra","Papel","Tesoura"];
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-borad");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("0");
const paper_div = document.getElementById("1");
const scissors_div = document.getElementById("2");
/*const smallUserWorld = "você".fontsize(3).sub();
const smallCompWorld = "pc".fontsize(3).sub();*/

function getComputerChoice() {
    /* 0 = Rock , 1 = Paper and 2 = Scissors */
    /* Random number. 0, 1 or 2 */
    const randomNumber = Math.floor(Math.random() * 3);
    compChoice = randomNumber.toString(10);
    return compChoice;
}

function win(user,computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    switch (user + computer)
    {
        case "02":
            result_div.innerHTML = `${choices[user]} quebra ${choices[computer]}. Você ganhou !`
            break;
        case "21":
            result_div.innerHTML = `${choices[user]} corta ${choices[computer]}. Você ganhou !`
            break;
        case "10":
            result_div.innerHTML = `${choices[user]} cobre ${choices[computer]}. Você ganhou !`
            break;
    }
    document.getElementById(user).classList.add('green-glow');
    document.getElementById(computer).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'),1000);
    setTimeout(() => document.getElementById(computer).classList.remove('red-glow'),1000);
}

function lose(user,computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    switch (user + computer)
    {
        case "01":
            result_div.innerHTML = `${choices[computer]} cobre ${choices[user]}. Você perdeu !`
            break;
        case "12":
            result_div.innerHTML = `${choices[computer]} corta ${choices[user]}. Você perdeu !`
            break;
        case "20":
            result_div.innerHTML = `${choices[computer]} quebra ${choices[user]}. Você perdeu !`
            break;
    }
    document.getElementById(computer).classList.add('green-glow');
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(computer).classList.remove('green-glow'),1000);
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'),1000);
}

function draw(user) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `Ambos escolheram ${choices[user]}. Empate !`
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow'),1000);
}

function game(userChoice)
{
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "02":
        case "21":
        case "10":
            win(userChoice,computerChoice);
            break;
        case '01':
        case '12':
        case '20':
            lose(userChoice,computerChoice);
            break;
        default:
            draw(userChoice);
      } 
}

function main() {
    rock_div.addEventListener ('click', () => game("0"));
    paper_div.addEventListener ('click', () => game("1"));
    scissors_div.addEventListener ('click', () => game("2"));
}

main();