import React from 'react'
import Person from './Person'
import personService from '../services/persons'

const NumberList = props => {

    var newPersonList = props.newPersonList
    var setPersons = props.setPersons
    var persons = props.persons
    var deletePerson = props.deletePerson

    return (
       <div>
            <h2>Numbers</h2>
            <ul>
              {newPersonList.map((person, i) =>
              <Person key={i} name={person.name} id={person.id} person={person} deletePerson={deletePerson(person.name, person.id)}/>
              )}
              
            </ul>
       </div>
    )
}

export default NumberList
