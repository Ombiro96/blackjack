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
// let randomNumber=0
// function rollDice(){
//     randomNumber=Math.floor(Math.random()*6)+1;
//     return randomNumber//we have to return the number
// }
// for(let i=0; i<20; i++){   
//   console.log(rollDice())
// }
//Logical operators AND OR

// let likesDocumentaries=false
// let likesStartups=true

// if(likesDocumentaries === true || likesStartups === true){
//   recommendMovies()
// }

// function recommendMovies(){
//   console.log("Hey, check out this new film we think you will like")
// 

//obects
// let castle= {
//   listings: "Naivasha bluh bluh",
//   price: 456,
//   images: ["img/castle.png", "img/castle2.png"]
// }
// console.log(castle.listings)
// console.log(castle["images"])
// let person={
//   name: "Clifford",
//   age: 25,
//   country: "Kenya"
// }
// console.log(person)
// let personEl=document.getElementById("person-el")
// function logdata(){
//   personEl.textContent=person.name+ " is "+ person.age + " years old " + " and lives in " + person.country + "."
// }
// logdata()
// let age = 76
// let discount=""
// if(age<6){
//   discount="free"
// }
// else if(age<18){
//   discount="child discount"
// }
// else if(age<26){
//   discount="student discount"
// }
// else if(age<66){
//   discount="full price"
// }
// else{
//   discount="senior citizen discount"
// }
// console.log(discount)
// let largeCountries=["Tuvalu","India","USA","Indonesia","Monaco"]
// console.log("The largest 5 countires in the world are: ")
// for(let i=0;i<largeCountries.length;i++){
//   console.log("- " + largeCountries[i])
// }
// largeCountries.pop()//removes last in
// largeCountries.push("Parkistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log("New data")
// for(let i=0;i<largeCountries.length;i++){
//   console.log("- " + largeCountries[i])
// } //lightweight
// let dayOfTheMonth=13
// let weekDay="Friday"
// if(dayOfTheMonth===13&&weekDay==="Friday")
// {
//   console.log("Spooky")
// } This was too easy
// let hands=["rock","paper","scissors"]
// function randomHand(){
// let item=Math.floor(Math.random()*3)
// return hands[item]
// }//will do a rock paper scissors api later
let fruit=["red","orange","red","red","orange"]
let redShelf=document.getElementById("red-shelf")
let orangeShelf=document.getElementById("orange-shelf")
for(let i=0;i<fruit.length;i++){
  fruit[i]
  if(fruit[i]==="red"){
    redShelf.textContent+=fruit[i]+" "
  }
  else if(fruit[i]==="orange")
  {
    orangeShelf.textContent+=fruit[i]+ " "
  }
  else{
    console.log("Umekosea boss")
  }
}