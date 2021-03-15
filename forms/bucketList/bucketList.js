

let keepGoing = true
let bucketList = []

while(keepGoing == true) {
  let seeAdd = prompt("Do you want to see you bucket list or add an item (see/add). Enter a different input to end the program.  : ")
  if (seeAdd == "see") {
    console.log(bucketList)
  } else if(seeAdd == "add") {
    let addition = prompt("What would you like to add: ")
    bucketList.push(addition)
  } else {
      keepGoing = false
    }
  }
