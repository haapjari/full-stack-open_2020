import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

// This is an entry point for a REACT -project.

// Instead of having different App.js file, App is initialized here.
const App = () => {

  /* ------------------------------------- */

  /* STATES */

  const [ persons, setPersons ] = useState([
    {
      id: 1,
      name: 'Aku Ankka',
      number: '0440000000'
    }
  ])

  const [ newName, setNewName ] = useState('')

  /* ------------------------------------- */

  const personsCollection = [
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
  ]

  const addToCollection = () => {
    console.log('Hello World')
  }

  /* ------------------------------------- */

  return (
    <div>
      <h2>PHONEBOOK APPLICATION</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button onClick={addToCollection()} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsCollection.map(person => <li>{person.id}: {person.name} {person.number}</li>)}
    </div>
  )
}

ReactDOM.render(
  <App />, document.querySelector('#root')
);