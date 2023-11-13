let noOfTeams = 0;
let vsNo= 0;
let level = 0;
let initLevel = 0;
let Teams = []

let oldLevelId = document.getElementById("level");
oldLevelId.setAttribute("id","level"+initLevel);

let initBracketId = document.getElementById("b1");
initBracketId.setAttribute("id",initLevel+"-"+"0");

function start(){ noOfTeams= parseInt(document.getElementById("noTeams").value);
    initLevel = Math.floor(Math.log2(noOfTeams)) - vsNo + 1;
    createMatch();
    document.getElementById("level0").classList.add("hide");
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
        requestAnimationFrame(() => createNewVs(noOfVs, newLevelDiv));
        vsNo++;
    }
    match.appendChild(newLevelDiv);
}

function createNewVs(order, newLevelDiv){
    let newVs = document.createElement("div");
    newVs.classList.add("vs");
    newVs.id = "b" + order;
    requestAnimationFrame(() => createNewBracket("up", newVs));
    requestAnimationFrame(() => createNewBracket("down", newVs));
    newLevelDiv.append(newVs);
}


function createNewBracket(upOrDown, newVs){
    let newBracket = document.createElement("button");
    newBracket.classList.add("bracket");
    newBracket.addEventListener("click",winner_bracket);
    switch (upOrDown) {
        case "up":
            newBracket.innerHTML = "UP";
            break;
        case "down":
            newBracket.innerHTML = "DOWN";
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


function addTeam(){
    var team = document.getElementById("Teams");
    Teams.push(team.value);
    team.value = "";
}
