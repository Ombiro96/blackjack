//the two variables should be between 10 and 2
let cliffM=document.getElementById("cliff")
let firstCard=9
let secondCard=3
let card=[firstCard, secondCard]
let sum=firstCard + secondCard
let hasBlackJack = false
let isAlive=true
let message=""
cliffM.innerText+=" by Clifford"
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
//console.log(sum)
//>21 losing
//21 winning
//<21 still in the running
function startGame(){
    renderGame()
}
function renderGame(){
sumEl.textContent = "Sum: " + sum
cardEl.textContent=card[0] + " " + card[1]
if(sum < 21){
    //still in running
    message="Do you want to draw another card?"
}
else if(sum === 21){
    //won
    message="You've got Blackjack!"
    hasBlackJack=true
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
    let thirdCard=9
    sum+=thirdCard
    renderGame()
}