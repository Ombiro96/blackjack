// let featuredPosts=["Check out my Netflix clone",
//  "Here is code for my project",
//  "I have relaucnhed my portfilio"]

//  console.log(featuredPosts.length)
// let cards=[7,4]

// cards.push(6)
// console.log(cards)
// let messages=[
//     "Hey, how's it going?",
//     "I'm good, thank you: How about you?",
//     "All good, Been working on my portfolio lately."
// ]
// let newMessage="Same here!"
// messages.push(newMessage)
// console.log(messages)
// messages.pop()
// console.log(messages)
let randomNumber=0
function rollDice(){
    randomNumber=Math.floor(Math.random()*6)+1;
    return randomNumber//we have to return the number
}
for(let i=0; i<20; i++){   
  console.log(rollDice())
}

