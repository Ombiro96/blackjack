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
let sentence=["Hello,", "my", "name", "is", "Clifford"]
let greetings=document.getElementById("greeting-el")
for(let i=0; i<sentence.length; i++)
{
greetings.textContent+=sentence[i] + " "
}