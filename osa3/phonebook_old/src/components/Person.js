import React from 'react'

const Person = (props) => {

    var person = props.person
    var deletePerson = props.deletePerson

    return (
        <li>
            {person.name} {person.number}  
            
            <button type="submit" onClick={deletePerson}>Delete</button>
        </li>
    )
}

export default Person
