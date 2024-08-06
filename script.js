let boxes=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#reset");
let newGame=document.querySelector("#newbtn");
let msgBoxCon=document.querySelector(".msgbox");
let message=document.querySelector("#msg")
let turn0=true;
const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turn0=true;
    enabledbox();
    msgBoxCon.classList.add("hide");
}


boxes.forEach((btn) => {
    btn.addEventListener("click",()=>{
        console.log("clicked");
        if(turn0){
        btn.innerText="0";
        turn0=false;
        }
        else{
            btn.innerText="X";
            turn0=true;
        }
        btn.disabled=true;
        winner();


    });
     
});
const enabledbox=()=>{
    for(let btn of boxes){
        btn.disabled=false;
        btn.innerText="";
    }
}
const disabledbox=()=>{
    for(let btn of boxes){
        btn.disabled=true;
    }
}
const show=(winner)=>{
    message.innerText=`winner is ${winner}`;
    msgBoxCon.classList.remove("hide");
    disabledbox();

};
const winner=()=>{
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner", pos1);
                show(pos1);
            }
        }

    }

};
newGame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);