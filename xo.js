let cell = document.getElementsByClassName("cell");
let choose = document.getElementById("color-selection");
let colors = document.getElementById("color-options");
let start = document.getElementById("start-menu");
let final = document.getElementById("final");
let rematch = document.getElementById("rematch-menu");
let board = document.getElementById("board");
let names = document.getElementById("name-selection");
let playername = document.getElementById("playername");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let gameboard = document.getElementById("game-board");
let turnshow = document.getElementById("turn");

let turn = 1, finish = true, a = ["","","","","","","","",""], color1, color2, symbol = 'x', score1 = 0, score2 = 0, match = 0, name1, name2, bothchoose = false;

function play(){
    if(match == 0){
        start.style.display = "none";
        names.style.display = "block";
        board.style.display = "none";
    }
    else{
        reset();        
        rematch.style.display = "none";
        choose.style.display = "block";
        colors.style.display = "inline";
        a = ["","","","","","","","",""];
        bothchoose = false;
    }
}

function reset(){
    for(let i = 0; i < 9; i++){
        cell[i].innerHTML = "-";
        cell[i].style.color = "white";
    }
}

function submitNames(){
    names.style.display = "none";
    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;
    choose.style.display = "block";
    colors.style.display = "inline";
    playername.innerHTML = name1;
    player1.innerHTML = name1;
    player2.innerHTML = name2;
}

function selectColor(inputcolor){
    if(turn == 1){
        if(bothchoose == false){
            playername.innerHTML = name2;
            color1 = inputcolor;
        }else{
            color2 = inputcolor;
            colors.style.display = "none";
            finish = false;
            gameboard.style.display = "block";
            board.style.display = "inline-flex";
            choose.style.display = "none";
            turnshow.style.display = "inline";
            document.getElementById("playerturn").innerHTML = name1;
            turnshow.style.color = color1;
            playername.innerHTML = name2;
        }
    }
    else {
        if(bothchoose == false){
            playername.innerHTML = name1;
            color2 = inputcolor;
        }else{
            color1 = inputcolor;
            colors.style.display = "none";
            finish = false;
            gameboard.style.display = "block";
            board.style.display = "inline-flex";
            choose.style.display = "none";
            turnshow.style.display = "inline";
            document.getElementById("playerturn").innerHTML = name2;
            turnshow.style.color = color2;
            playername.innerHTML = name1;
        }
    }
    bothchoose = true ;
}

for(let i = 0; i < 9; i++){
    cell[i].addEventListener("click", 
        function(e){
            let clickcell;
            for(let j = 0; j < 9; j++){
                if(e.target == cell[j]){
                    clickcell = j;
                }
            }
            if(!finish && a[clickcell] == ""){
                e.target.innerHTML = symbol;
                a[clickcell] = symbol;
                if(turn == 1){
                    e.target.style.color = color1;
                    document.getElementById("playerturn").innerHTML = name2;
                    turnshow.style.color = color2;
                }
                else{
                    e.target.style.color = color2;
                    document.getElementById("playerturn").innerHTML = name1;
                    turnshow.style.color = color1;
                }
                if(symbol == 'x'){
                    symbol = 'o';
                }
                else{
                    symbol = 'x'
                }
                turn = (turn + 1) % 2;
                checkfinish();
            }
         }
     )
}

function checkfinish(){
    if((a[0]==a[1] && a[2]==a[1] && a[0]!="") ||  (a[3]==a[4] && a[5]==a[3] && a[3]!="") || (a[6]==a[7] && a[8]==a[6] && a[6]!="")
    || (a[0]==a[3] && a[6]==a[0] && a[0]!="") || (a[1]==a[4] && a[7]==a[1] && a[1]!="") || (a[2]==a[5] && a[8]==a[2] && a[2]!="")
    ||(a[0]==a[4] && a[8]==a[0] && a[0]!="") || (a[2]==a[4] && a[6]==a[2] && a[2]!="")){
        if(turn == 0){
            score1++;
            final.innerHTML = `${name1} Won`;
            final.style.color = color1;
        }   
        else{
            score2++;
            final.innerHTML = `${name2} Won`;
            final.style.color = color2;
        }
        match++;
        document.getElementById("match").innerHTML = match;
        document.getElementById("score1").innerHTML = score1;
        document.getElementById("score2").innerHTML = score2;
        gameboard.style.display = "none";
        rematch.style.display = "inline";
        turnshow.style.display = "none";
        finish = true;
        turn = (match+1) % 2;
    }
    else if(a[0]!="" && a[1]!="" && a[2]!="" && a[3]!="" && a[4]!="" && a[5]!="" && a[6]!="" && a[7]!="" && a[8]!="" && !finish){
        score1 += 0.5;
        score2 += 0.5;
        match++;
        document.getElementById("match").innerHTML = match;
        document.getElementById("score1").innerHTML = score1;
        document.getElementById("score2").innerHTML = score2;
        gameboard.style.display = "none";
        rematch.style.display = "inline";
        turnshow.style.display = "none";
        finish = true;
        turn = (match+1) % 2;
        final.innerHTML = `Draw`;
    }
}

function end(){
    board.style.display = "none";
    if(score1 > score2){
        rematch.innerHTML = `Game Over <br> ${name1} <br> is winner`;
        rematch.style.color = color1;
    }else if(k2 > k1){
        rematch.innerHTML = `Game Over <br> ${name2} <br> is winner`;
        rematch.style.color = color2;
    }else{
        final.innerHTML= "Game Over <br> nobody win";
    }
}
