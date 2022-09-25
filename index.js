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
    const image=document.createElement("img")
    image.setAttribute('src','win.png')
    image.setAttribute('alt', 'ace of spades')
    image.setAttribute('height', 350);
    image.setAttribute('width', 550);
    image.style.border='5px solid yellow';
    image.onerror=function handleError(){
        console.log('Image could not be loaded')
    };
    image.onload=function handleImageLoaded(){
        console.log("Successful")
    }
    const box=document.querySelector("#box");
    box.appendChild(image)
}