let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset-button");
let newGameButton=document.querySelector("#new-game-button");
let messageContainer=document.querySelector(".message-container");
let message=document.querySelector("#message");

let turnO=true; //player X  ,   player O;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    messageContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    disableBoxes();
    message.innerText="Player "+winner+" wins!";
    messageContainer.classList.remove("hide");
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let postion1Val=boxes[pattern[0]].innerText;
        let postion2Val=boxes[pattern[1]].innerText;        
        let postion3Val=boxes[pattern[2]].innerText;

        if(postion1Val!="" && postion2Val!="" && postion3Val!=""){
            if(postion1Val===postion2Val && postion2Val===postion3Val){
                showWinner(postion1Val);
            }
        }
    }
}

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);