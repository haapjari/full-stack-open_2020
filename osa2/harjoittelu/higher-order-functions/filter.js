// Higher-Order JavaScript Functions

// map

// filter

// reject
console.log("test");

var triple = function(x) {
    return x * 3
}

var animals = [
    { name: 'Miuku', species: 'cat' },
    { name: 'Musti', species: 'dog' },
    { name: 'Stuart Little', species: 'mouse' }
]

/*
var dogs = animals.filter(function(animal) {
    return animal.species === 'dog'
})
*/

var isDog = function(animal) {
    return animal.species === 'dogs'
}

var dogs = animals.filter(isDog)
var otherAnimals = animals.reject(isDog) // this filter out dogs

console.log(dogs)