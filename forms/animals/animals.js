
let myAnimals = ['dog', 'cat', 'horse', 'meerkat']
newAnimal = prompt("Enter a new animal: ")
myAnimals.push(newAnimal.toLowerCase())
length = myAnimals.length
console.log(`The last animal is a/an ${myAnimals[length-1]}`)
