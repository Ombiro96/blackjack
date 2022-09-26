//the two variables should be between 10 and 2
let cliffM=document.getElementById("cliff")
let playerEl=document.getElementById("player-el")
let cards=[]
let sum=0
let hasBlackJack = false
let isAlive=false
let message=""
cliffM.innerText+=" by Clifford"
let messageEl=document.querySelector("#message-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.querySelector("#card-el")
let player={
    name: "Clifford Ombiro Mwenda ",
    chips: 4500
}
playerEl.textContent=player.name + ": Kshs." + player.chips
var imageArray=new Array()

imageArray[0]=new Image;
imageArray[0].src="ace.png"

imageArray[1]=new Image;
imageArray[1].src="ace.png"

imageArray[2]=new Image;
imageArray[2].src="2.png"

imageArray[3]=new Image;
imageArray[3].src="3.png"

imageArray[4]=new Image;
imageArray[4].src="4.png"

imageArray[5]=new Image;
imageArray[5].src="5.png"

imageArray[6]=new Image;
imageArray[6].src="6.png"

imageArray[7]=new Image;
imageArray[7].src="7.png"

imageArray[8]=new Image;
imageArray[8].src="8.png"

imageArray[9]=new Image;
imageArray[9].src="9.png"

imageArray[10]=new Image;
imageArray[10].src="10.png"

function nextImage(box){//will work on later
    var img=document.getElementById("box")

    for(var i = 0; i<imageArray.length; i++){
        if(imageArray[i]==img.src){
            document.getElementById(box).src=imageArray[0].src;
            break;
        }
        document.getElementById.src=imageArray[i+1].src;
        break;
    }
}
//console.log(sum)
//>21 losing
//21 winning
//<21 still in the running
function getRandomCard(){
    let randomCard=Math.floor(Math.random()*13+1)
    if(randomCard===1){
        return 11
    }
    else if(randomCard>10)
    {
        return 10
    }
    else{
        return randomCard
    }
}
function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard, secondCard]
    sum=firstCard + secondCard
    renderGame()
}
function renderGame(){
sumEl.textContent = "Sum: " + sum
cardEl.textContent="Cards: "
for(let i=0; i<cards.length; i++){
cardEl.textContent+=cards[i]+" "
}
if(sum < 21){
    //still in running
    message="Do you want to draw another card?"
}
else if(sum === 21){
    //won
    message="You've got Blackjack!"
    hasBlackJack=true
    loadImage()
}
else
{
    //losing
    message="You're out of the game!"
    isAlive=false
}
messageEl.textContent=message
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let thirdCard=getRandomCard()
    sum+=thirdCard
    cards.push(thirdCard)
    renderGame()
    }
}
function loadImage(){
    const image1=document.createElement("img")
    image1.setAttribute('src','win.png')
    image1.setAttribute('alt', 'ace of spades')
    image1.setAttribute('height', 350);
    image1.setAttribute('width', 550);
    image1.style.border='5px solid yellow';
    image1.onerror=function handleError(){
        console.log('Image could not be loaded')
    };
    image1.onload=function handleImageLoaded(){
        console.log("Successful")
    }
    const box=document.querySelector("#box");
    box.appendChild(image1)
}