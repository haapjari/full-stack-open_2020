import React from 'react'

const Country = ({ country }) => {

    var countryName = country.name
    var countryCapital = country.capital
    var countryPopulation = country.population
    var countryLanguages = country.languages // Array

    return (
        <div>
            <li>{countryName}</li>
            <li>{[countryLanguages]}</li>
        </div>
        
    )
}

export default Country