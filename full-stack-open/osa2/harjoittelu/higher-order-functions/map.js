// transforms objects for example in an array

var animals = [
    { name: 'Miuku', species: 'cat' },
    { name: 'Musti', species: 'dog' },
    { name: 'Stuart Little', species: 'mouse' }
]

// Assignment: We want an array with all the names of the animals.

/*
var names = animals.map(function(animal) {
    return animal.name + ' is a ' + animal.species
})
*/

var names = animals.map((animal) => animal.name + ' is a ' + animal.species)

console.log(names)