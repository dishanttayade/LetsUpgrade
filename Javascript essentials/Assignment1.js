// Question 1
console.log("Question 1")
const michael = "People say I'm the best boss."
console.log("michael = ",michael)
console.log("1.michael.length = ",michael.length)
console.log("2.michael.slice(15) = ",michael.slice(15))
console.log("3.michael.slice(11, 29) = ",michael.slice(11, 29))
console.log("4.michael.slice(11, -1) = ",michael.slice(11, -1))
console.log("5.michael.slice(-5) = ",michael.slice(-5))
console.log("6.michael.slice(-10, -6) = ",michael.slice(-10, -6))
console.log("\n\n")


// Question 2
console.log("Question 2")
let dukeOfHastingsSays = "I burn for you."
console.log("dukeOfHastingsSays = ",dukeOfHastingsSays)
let newArray = dukeOfHastingsSays.toLowerCase().split(" ")
console.log("newArray = ",newArray)
let newStringWithSpace = newArray.join(" ")
console.log("newStringWithSpace = ",newStringWithSpace)
let newStringWithoutSpace = newArray.join("")
console.log("newStringWithoutSpace = ",newStringWithoutSpace)
console.log("\n\n")


// Question 3
console.log("Question 3\n")
let starHollows = ['Lorelai', 'Rory', 'Luke', 'Lane', 'Kirk', 'Taylor']
console.log("starHollows = ",starHollows)
let removed = starHollows.splice(1)
console.log("removed = ",removed)
console.log("starHollows = ",starHollows,"\n")


let beverlyHillsGang = ['Brandon', 'Brenda', 'Dylan', 'Andrea', 'Steve', 'Kelly', 'Donna', 'David']
console.log("beverlyHillsGang = ", beverlyHillsGang)
removed = beverlyHillsGang.splice(1, 2)
console.log("removed = ",removed)
console.log("beverlyHillsGang = ", beverlyHillsGang,"\n")


let seinfeld = ['Jerry', 'George', 'Kramer', 'Newman', 'Elaine']
console.log("seinfeld = ",seinfeld)
removed = seinfeld.splice(-2, 1)
console.log("removed = ",removed)
console.log("seinfeld = ",seinfeld,"\n")


let brooklynNineNine = ['Jake', 'Amy', 'Charles','Rosa', 'Captain Holt', 'Gina', 'Terry']
console.log("brooklynNineNine = ",brooklynNineNine)
let removedAndInserted = brooklynNineNine.splice(5, 1, 'Hitchcock', 'Scully')
console.log("removedAndInserted = ",removedAndInserted)
console.log("brooklynNineNine = ",brooklynNineNine,"\n")


let friends = ['Ross', 'Rachel', 'Joey', 'Chandler', 'Monica', 'Phoebe']
console.log("friends = ",friends)
let insertedOnly = friends.splice(1, 0, 'Gunther', 'Carol', 'Susan')
console.log("insertedOnly = ",insertedOnly)
console.log("friends = ",friends,"\n")
