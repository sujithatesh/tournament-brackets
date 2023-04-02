let noOfTeams = prompt("How many number of teams are participating in the tournament?");
let match = document.getElementById("match");

while(1){
    if(noOfTeams==1){
        noOfTeams = prompt("Enter more than one team");
    }
    if(noOfTeams>1&&noOfTeams!==""){
        let i = noOfTeams & (noOfTeams-1);
        if(i!=0){
            noOfTeams = prompt("Enter correct number of teams( order of 2^n )");
        }
        else{
            break;
        }
        console.log(i);
    }
}

let noOfClicks = 0;
let level = 0;
let initLevel =(Math.log2(noOfTeams)-noOfClicks);

let oldId = document.getElementById("level");
oldId.setAttribute("id","level"+initLevel);


function winner_bracket(){
    var winner = document.getElementById(down);
    winner.classList.add("winner");
}

function createNewLevel(level){
    if(level<0)
        return;
    var newLevelDiv = document.createElement("div");
    newLevelDiv.classList.add("level");
    newLevelDiv.textContent = "Hello";
    newLevelDiv.id = "level"+(level);
    match.appendChild(newLevelDiv);
}

function createNewBracket(){
    noOfClicks++;
    let oldLevel = level;
    level = (Math.log2(noOfTeams)-noOfClicks);
    if(oldLevel!=level){
        createNewLevel(level);
    }
    if(level<0)
        return;
    const newBracket = document.getElementById('b1').cloneNode(true); 
    newBracket.id = "b"+(noOfClicks);
    let Divlevel = document.getElementById('level'+level);
    Divlevel.appendChild(newBracket);
}
