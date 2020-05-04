var Games = 0;
var isGameRolling = 1;
let p1Score = 0;
let p2Score = 0;
const Player1Score_span = document.getElementById("Player1");
const Player2Score_span = document.getElementById("Player2");
const Players = ["O","X"];
var PlayerIndex = 0 ;
var Render = new Array(8).fill(null);
const Result = document.querySelector(".endgame");
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
]

function Draw(){
    Result.style.display = "block";
    Result.innerHTML = "Deu velha...";
}

function Win(Player){
    Player+=1;
    Result.style.display = "block";
    Result.innerHTML = `Jogador ${Player} ganhou ! `;
    if(Player==1){
        p1Score++;
    }
    else {
        p2Score++;
    }
    Player1Score_span.innerHTML = p1Score;
    Player2Score_span.innerHTML = p2Score;
}

function checkDraw(){
    for (var i=0 ; i < 9 ; i++){
        if (Render[i] == null)
        {
            return false;
        }
    }
    return true;
}

function checkWin(Player){
    for ( var i = 0; i < 8 ; i++){
        if(Render[winPattern[i][0]]==Player && Render[winPattern[i][1]]==Player && Render[winPattern[i][2]]==Player)
        {
            return true;
        }
    }
    return false;
}

const cells = document.getElementsByClassName("cell");

function startGame () {
    /* Reseta tudo */
    document.querySelector(".endgame").style.display = "none";
    Render = new Array(8).fill(null);
    PlayerIndex = 0 ;
    isGameRolling = 1;
    cells[0].innerText = '';
    cells[1].innerText = '';
    cells[2].innerText = '';
    cells[3].innerText = '';
    cells[4].innerText = '';
    cells[5].innerText = '';
    cells[6].innerText = '';
    cells[7].innerText = '';
    cells[8].innerText = '';
    main();
}

function TicTacToe(cell_index) {
    if(isGameRolling && Render[cell_index]==null){
        console.log(Players[PlayerIndex],PlayerIndex);
        document.getElementById(cell_index).innerText = Players[PlayerIndex];
        Render[cell_index] = PlayerIndex;
        if (checkWin(PlayerIndex)){
            Win(PlayerIndex);
            Games++;
            isGameRolling=0;
        }
        else if (checkDraw()){
            Draw();
            Games++;
            isGameRolling=0;
        }
        /* Pra alternar os players */
        PlayerIndex = 1 - PlayerIndex;
    }
}

function main() {
    if (!Games){
        cells[0].addEventListener('click', () => TicTacToe (0));
        cells[1].addEventListener('click', () => TicTacToe (1));
        cells[2].addEventListener('click', () => TicTacToe (2));
        cells[3].addEventListener('click', () => TicTacToe (3));
        cells[4].addEventListener('click', () => TicTacToe (4));
        cells[5].addEventListener('click', () => TicTacToe (5));
        cells[6].addEventListener('click', () => TicTacToe (6));
        cells[7].addEventListener('click', () => TicTacToe (7));
        cells[8].addEventListener('click', () => TicTacToe (8));
    }
}

startGame();



