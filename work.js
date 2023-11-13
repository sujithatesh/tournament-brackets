let noOfTeams = 0;
let vsNo= 0;
let level = 0;
let initLevel = 0;
let Teams = []


function start(){ 
    noOfTeams = Teams.length
    initLevel = Math.floor(Math.log2(noOfTeams)) - vsNo + 1;
    createMatch();
}

function addTeam(){
    var team = document.getElementById("inputTeams");
    let printTeams = document.getElementById("Teams");
    Teams.push(team.value);
    team.value = "";
    let displayTeam = document.createElement("div");
    displayTeam.innerHTML = Teams[Teams.length - 1];
    printTeams.appendChild(displayTeam);
}

function deleteTeam(){
    if(Teams == "") return;
    Teams.pop();
    let printTeams = document.getElementById("Teams");
    printTeams.removeChild(printTeams.lastChild);
}

function createMatch(){
    var tempLevel = initLevel; 
    while(tempLevel>1){
        tempLevel--;
        createNewLevel(tempLevel); 
    }
}


function createNewLevel(level){
    if(level<1)
        return;
    var newLevelDiv = document.createElement("div");
    newLevelDiv.classList.add("level");
    newLevelDiv.textContent = "level: "+level;
    newLevelDiv.id = "level"+(level);
    let noOfVs = 2 ** (level-1);
    while(noOfVs--){
        requestAnimationFrame(() => createNewVs(vsNo, newLevelDiv));
        vsNo++;
    }
    match.appendChild(newLevelDiv);
}

function createNewVs(order, newLevelDiv){
    let newVs = document.createElement("div");
    newVs.classList.add("vs");
    newVs.id = "b" + order;
    requestAnimationFrame(() => createNewBracket(order, "up", newVs));
    requestAnimationFrame(() => createNewBracket("this", "down", newVs));
    newLevelDiv.append(newVs);
}


function createNewBracket(inner, upOrDown, newVs){
    let newBracket = document.createElement("button");
    newBracket.classList.add("bracket");
    newBracket.addEventListener("click",winner_bracket);
    newBracket.innerHTML = inner;
    switch (upOrDown) {
        case "up":
            newBracket.id = "up";
            break;
        case "down":
            newBracket.id = "down";
            break;
        default:
            break;
    }
    newVs.append(newBracket);
}


function winner_bracket(){
    const clickedBracket = event.target;
    const parentDiv = clickedBracket.parentElement;

    const buttons = parentDiv.querySelectorAll(".bracket");
    buttons.forEach(button => button.classList.remove("winner"));

    clickedBracket.classList.toggle("winner");
}


