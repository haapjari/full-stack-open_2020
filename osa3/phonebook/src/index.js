import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import './components/Person'
import Person from './components/Person';

/* ------------------------------------- */
/* ------------------------------------- */
/* ------------------------------------- */

// This is an entry point for a REACT -project.

// Instead of having different App.js file, App is initialized here.

/* ------------------------------------- */
/* ------------------------------------- */
/* ------------------------------------- */

const App = () => {

  /* ------------------------------------- */

  /* STATES */

  const [ persons, setPersons ] = useState([
    {
      id: 1,
      name: 'Aku Ankka',
      number: '0440000000'
    },
    {
      id: 2,
      name: 'Roope Ankka',
      number: '0441111111'
    },
    {
      id: 3,
      name: 'Hannu Hanhi',
      number: '0442222222'
    }
  ])

  const [ newName,      setNewName      ] = useState('')
  const [ newNumber,    setNewNumber    ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')

  /* ------------------------------------- */
  /* ------------------------------------- */
  /* ------------------------------------- */

  const addPerson = (event) => {
    event.preventDefault()
    // console.log('button clicked', event.target)
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }

    var flag = 0 
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name.toLowerCase() === personObject.name.toLowerCase()) {
        flag = 1
      }
    }

    if (flag === 1) {
      alert(`${newName} is already added to phonebook`)
      // clear the fields before breaking out of the function
      setNewName('')
      setNewNumber('')
			return // break out of the function
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')

    // Printing through the JSON Collection.
    for (let i = 0; i < persons.length; i++) {
      var object = persons[i]
      console.log(object.id + ' ' + object.name + ' ' + object.number)
    }
  }

  /* ------------------------------------- */
  /* ------------------------------------- */
  /* ------------------------------------- */

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  /* ------------------------------------- */
  /* ------------------------------------- */
  /* ------------------------------------- */

  return (
    <div>
      <h2>PHONEBOOK APPLICATION</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Person key={person.id} person={person} />
      )}
    </div>
  )
}

/* ------------------------------------- */
// Render the React.JS Application
/* ------------------------------------- */

ReactDOM.render(
  <App />, document.querySelector('#root')
);