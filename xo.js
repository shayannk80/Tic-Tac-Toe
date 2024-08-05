let div = document.getElementsByClassName("div");
let c = 0, finish = true, a = ["","","","","","","","",""], s1, s2, ss = 1, k1 = 0, k2 = 0, k3 = 0;
let go = document.getElementById("go");
let clrs = document.getElementById("clrs");
let start = document.getElementById("start");
let final = document.getElementById("final");
let finn = document.getElementById("finn");
let board = document.getElementById("board");

function play(){
    board.style.display = "inline-flex";
    start.style.display = "none";
    go.style.display = "block";
    clrs.style.display = "inline";
    finn.style.display = "none";
    c = k3, finish = true, a = ["","","","","","","","",""], ss = 1;
    go.innerHTML = "X choose color";
    reset();
}
function reset(){
    for(let i = 0; i < 9; i++){
        div[i].innerHTML = "-";
        div[i].style.color = "white";
    }
}
function clr(s){
    if(ss == 1){
        go.innerHTML = "O choose color";
        s1 = s;
    }else{
        s2 = s;
        clrs.style.display = "none";
        finish = false;
        go.innerHTML = "playing now...";
    }
   ss++;
}

for(let i = 0; i < 9; i++){
    div[i].addEventListener("click", 
        function(e){
            let k;
            for(let j = 0; j < 9; j++){
                if(e.target == div[j]){
                    k = j;
                }
            }
            if(!finish && a[k] == ""){
                if(c%2 == 0){
                    e.target.innerHTML = "x";
                    e.target.style.color = s1;
                    a[k] = "x";
                }
                else{
                    e.target.innerHTML = "o";
                    e.target.style.color = s2;
                    a[k] = "o";
                }
                c++;
                checkfinish();
            }
         }
     )
}

function checkfinish(){
    if((a[0]=='x' && a[1]=='x' && a[2]=='x') ||  (a[3]=='x' && a[4]=='x' && a[5]=='x') || (a[6]=='x' && a[7]=='x' && a[8]=='x')
    || (a[0]=='x' && a[3]=='x' && a[6]=='x') || (a[1]=='x' && a[4]=='x' && a[7]=='x') || (a[2]=='x' && a[5]=='x' && a[8]=='x')
    ||(a[0]=='x' && a[4]=='x' && a[8]=='x') || (a[2]=='x' && a[4]=='x' && a[6]=='x')){
        alert("X win");
        k1++;
        k3++;
        calculate();
        go.style.display = "none";
        finn.style.display = "inline";
        finish = true;
    }
    if((a[0]=='o' && a[1]=='o' && a[2]=='o') ||  (a[3]=='o' && a[4]=='o' && a[5]=='o') || (a[6]=='o' && a[7]=='o' && a[8]=='o')
    || (a[0]=='o' && a[3]=='o' && a[6]=='o') || (a[1]=='o' && a[4]=='o' && a[7]=='o') || (a[2]=='o' && a[5]=='o' && a[8]=='o')
    ||(a[0]=='o' && a[4]=='o' && a[8]=='o') || (a[2]=='o' && a[4]=='o' && a[6]=='o')){
        alert("O win");
        k2++;
        k3++;
        calculate();
        go.style.display = "none";
        finn.style.display = "inline";
        finish = true;
    }
    if(a[0]!="" && a[1]!="" && a[2]!="" && a[3]!="" && a[4]!="" && a[5]!="" && a[6]!="" && a[7]!="" && a[8]!="" && !finish){
        alert("tie");
        k3++;
        k2 += 0.5;
        k1 += 0.5;
        calculate();
        go.style.display = "none";
        finn.style.display = "inline";
        finish = true;
    }
}
function calculate(){
    document.getElementById("k3").innerHTML = k3;
    document.getElementById("k1").innerHTML = k1;
    document.getElementById("k2").innerHTML = k2;
}
function end(){
    go.style.display = "none";
    finn.style.display = "none";
    if(k1 > k2){
        final.style.color = s1;
        if(s1 == "black"){
            final.style.color = "white";
        } 
        final.innerHTML= "Game Over <br> X is winner";
    }else if(k2 > k1){
        final.style.color = s2;
        if(s2 == "black"){
            final.style.color = "white";
        } 
        final.innerHTML= "Game Over <br> O is winner";
    }else{
        final.innerHTML= "Game Over <br> nobody win";
    }
}
