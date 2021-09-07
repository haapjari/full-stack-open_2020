import React from 'react'
import personService from '../services/persons'
import axios from 'axios'

const PersonForm = props => {

    var persons = props.persons
    var setPersons = props.setPersons // function
    var newName = props.newName
    var setNewName = props.setNewName // function
    var newNumber = props.newNumber
    var setNewNumber = props.setNewNumber // function
    var setNewPersonList = props.setNewPersonList // function
    var handleNameChange = props.handleNameChange // function
    var handleNumberChange = props.handleNumberChange // function
    var addName = props.addName

    

    return (
        <div>
            <h2>add people</h2>
                <form onSubmit={addName}>
                    <div>
                    name: 
                    <input 
                        value={newName}
                        onChange={handleNameChange}
                    />
                    </div>
                    number:
                    <input 
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                    <div>
                    <button type="submit">add</button>
                    </div>
                </form>
        </div>
    )
}

export default PersonForm