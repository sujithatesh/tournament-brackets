let noOfTeams = prompt("How many number of teams are participating in the tournament?");
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

console.log(noOfTeams);
function winner_bracket(){
    var winner = document.getElementById(down);
    winner.classList.add("winner");
}
function createNewBracket(){
    noOfClicks++;
    const newBracket = document.getElementById('b1').cloneNode(true); 
    newBracket.id = "b"+(Math.log2(noOfTeams)-noOfClicks);
    document.body.appendChild(newBracket);
}
