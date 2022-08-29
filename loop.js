// let messages=[
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good, been working on my portfolio lately.",
//     "Same here."
// ]
// for(let i=0;i<messages.length; i++){
//     console.log(messages[i])
// }
// // let cards=[7, 3, 9]

// // for(i=0; i<cards.length; i++){
// //     console.log(cards[i])
// // }
// let sentence=["Hello,", "my", "name", "is", "Clifford"]
// let greetings=document.getElementById("greeting-el")
// for(let i=0; i<sentence.length; i++)
// {
// greetings.textContent+=sentence[i] + " "
// }
let player1Time=102
let player2Time=107

function getFastestRaceTime(){
    if(player2Time<player1Time){
        return player2Time
    }
    else if(player1Time<player2Time)
    {
        return player1Time
    }
    else//same times
    {
        return null
    }
}
// let fastestRaceTime=getFastestRaceTime()
// console.log(fastestRaceTime)
function totalRaceTime(){
    return player1Time + player2Time
}
let totalTime=totalRaceTime()
console.log(totalTime)