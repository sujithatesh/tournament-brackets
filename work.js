let noOfTeams = 0;
let bracketNo= 0;
let level = 0;
let initLevel = 0;


function createMatch(){
    var tempLevel = initLevel; 
    while(tempLevel>1){
        tempLevel--;
        createNewLevel(tempLevel); 
        console.log(tempLevel);
    }
    console.log("hello");
}


function printlog(){
    noOfTeams= parseInt(document.getElementById("noTeams").value);
    console.log("Teams",noOfTeams)
    initLevel = Math.floor(Math.log2(noOfTeams)) - bracketNo + 1;
    console.log("init",initLevel)
    createMatch()
    document.getElementById("level0").classList.add("hide");
}

console.log("noTeams",initLevel)
console.log("init",initLevel)
console.log("brack",bracketNo)

let oldLevelId = document.getElementById("level");
oldLevelId.setAttribute("id","level"+initLevel);

let initBracketId = document.getElementById("b1");
initBracketId.setAttribute("id",initLevel+"-"+"0");
console.log("initbrac",initBracketId)


function winner_bracket(){
    const clickedBracket = event.target;
    const parentDiv = clickedBracket.parentElement;

    const buttons = parentDiv.querySelectorAll(".bracket");
    buttons.forEach(button => button.classList.remove("winner"));

    clickedBracket.classList.toggle("winner");
}

function createNewLevel(level){
    if(level<1)
        return;
    var newLevelDiv = document.createElement("div");
    newLevelDiv.classList.add("level");
    newLevelDiv.textContent = "level: "+level;
    newLevelDiv.id = "level"+(level);
    console.log(newLevelDiv)
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
    let newBracket = null;
    console.log("initlevel",initLevel);
    newBracket = document.getElementById("0-0").cloneNode(true); 
    console.log("newbrac",newBracket)
    newBracket.id = level+bracketNo;
    let Divlevel = document.getElementById('level'+level);
    if (Divlevel) {
        console.log("divlevel",Divlevel.id);
        Divlevel.appendChild(newBracket);
    } 
    else {
        console.error('Could not find element with id "level' + level + '".');
    }
}




