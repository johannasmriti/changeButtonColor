//Age in Days
function ageInDays(){
    var birthYear = prompt('What year where you born?!');
    var ageInD = (2020-birthYear)*365;
    var h1= document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ageInD+" days old.");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//Cat Generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Rock, Paper, Scissors
function rpsGame(choice){
    var humanChoice,botChoice;
    //console.log(choice);
    humanChoice=choice;
    botChoice=numToChoice(randomrpsInt());
    //console.log('Bot choice : '+botChoice);
    result=decideWinner(humanChoice,botChoice); //[0,1],[1,0],[0.5],[0.5]
    //console.log('Result : '+result);
    message = finalMessage(result); //says if you won or lost or tied
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);
    console.log(message['color']);
}

function randomrpsInt(){
    return Math.floor(Math.random() * 3);
}

function numToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(humanChoice,botChoice){
    var dataBase = {
        'rock': {'scissors': 1,'rock': 0.5,'paper':0},
        'scissors': {'scissors': 0.5,'rock': 0,'paper':1},
        'paper': {'scissors': 0,'rock': 1,'paper':0.5},
    }
    var yourScore = dataBase[humanChoice][botChoice];
    var compScore = dataBase[botChoice][humanChoice];
    return [yourScore,compScore];
}

function finalMessage([yourScore,compScore]){
    if(yourScore==0){
        return{'fmessage': 'You Lost :(','color':'red'};
    }
    else if(yourScore==1){
        return{'fmessage': 'You Won :)','color':'green'};
    }
    else{
        return{'fmessage': 'Issa Tie!','color':'yellow'};
    }
}
function rpsFrontEnd(humanChoice,botChoice,message){
    var imgData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //imgData('rock');
    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    
    humanDiv.innerHTML="<img src='" +imgData[humanChoice]+"' height= 150 width=150 style='box-shadow: 0px 10px 50px rgb(0,0,0,0.7);'>";
    messageDiv.innerHTML="<h1 style='color: " + message['color'] + "; font-size:60px; padding:30px; '>"+message['fmessage'] + "</h1>";
    botDiv.innerHTML="<img src='" +imgData[botChoice]+"' height= 150 width=150 style='box-shadow: 0px 10px 50px rgb(0,0,0,0.7);'>";

    document.getElementById('flex-box-rps').appendChild(humanDiv);
    document.getElementById('flex-box-rps').appendChild(messageDiv);
    document.getElementById('flex-box-rps').appendChild(botDiv);
}

//Change the color of all the buttons
var allBut = document.getElementsByTagName('button');
console.log(allBut);

var copyArray = [];
for(let i=0;i<allBut.length;i++){
    copyArray.push(allBut[i].classList[1]);
    //console.log(copyArray[i]);
}
console.log(copyArray);

function buttonColorChange(buttonThing){    
    if(buttonThing.value=='red'){
        buttonRed();
    }
    else if(buttonThing.value=='blue'){
        buttonBlue();
    }
    else if(buttonThing.value=='green'){
        buttonGreen();
    }
    else if(buttonThing.value=='yellow'){
        buttonYellow();
    }
    else if(buttonThing.value=='reset'){
        buttonReset();
    }
    else{
        randomColor();
    }
}

function buttonRed(){
    for(let i=0;i<allBut.length;i++){
        allBut[i].classList.remove(allBut[i].classList[1]);
        allBut[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0;i<allBut.length;i++){
        allBut[i].classList.remove(allBut[i].classList[1]);
        allBut[i].classList.add('btn-success');
    }
    console.log(allBut);
}

function buttonBlue(){
    for(let i=0;i<allBut.length;i++){
        allBut[i].classList.remove(allBut[i].classList[1]);
        allBut[i].classList.add('btn-primary');
    }
}

function buttonYellow(){
    for(let i=0;i<allBut.length;i++){
        allBut[i].classList.remove(allBut[i].classList[1]);
        allBut[i].classList.add('btn-warning');
    }
}

function buttonReset(){
    //console.log(copyArray);
    for(let j=0;j<allBut.length;j++){
        console.log(copyArray[j]);
        var temp = copyArray[j];
        allBut[j].classList.remove(allBut[j].classList[1]);
        allBut[j].classList.add(copyArray[j]);
        //console.log(allBut[j]);
    }
}

function randomColor(){
    let choice = ['btn-primary','btn-success','btn-warning','btn-danger'];
    let temp = Math.floor(Math.random()*4);
    for(let i=0;i<allBut.length;i++){
        temp = Math.floor(Math.random()*4);
        allBut[i].classList.remove(allBut[i].classList[1]);
        allBut[i].classList.add(choice[temp]);
    }
}