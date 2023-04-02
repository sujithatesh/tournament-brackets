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




let bracketNo= 0;
let level = 0;
let initLevel =(Math.log2(noOfTeams)-bracketNo);

let oldLevelId = document.getElementById("level");
oldLevelId.setAttribute("id","level"+initLevel);
let initBracketId = document.getElementById("b1");
initBracketId.setAttribute("id",initLevel+"-"+"0");


function winner_bracket(){
    var winner = document.getElementById(down);
    winner.classList.add("winner");
}

function createNewLevel(level){
    if(level<1)
        return;
    var newLevelDiv = document.createElement("div");
    newLevelDiv.classList.add("level");
    newLevelDiv.textContent = "level: "+level;
    newLevelDiv.id = "level"+(level);
    let bracketsPerLevel = 2**(level-1);
    var bracketNo = 0;
    while(bracketsPerLevel--){
        requestAnimationFrame(() => createNewBracket(level,bracketNo));
        bracketNo++;
    }
    match.appendChild(newLevelDiv);
}


function createNewBracket(level,bracketNo){
    if(level<1)
        return;
    const newBracket = document.getElementById(initLevel+"-"+"0").cloneNode(true); 
    newBracket.id = level+bracketNo;
    let Divlevel = document.getElementById('level'+level);
    if (Divlevel) {
        console.log(Divlevel.id);
        Divlevel.appendChild(newBracket);
    } 
    else {
        console.error('Could not find element with id "level' + level + '".');
    }
    //console.log(Divlevel.id);
    //Divlevel.appendChild(newBracket);
}

function createMatch(){
    var tempLevel = initLevel; 
    while(tempLevel>1){
        tempLevel--;
        createNewLevel(tempLevel); 
        console.log(tempLevel);
    }
}
