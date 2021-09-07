import React, { useState, useEffect } from 'react'
import PersonForm from './PersonForm'
import Search from './Search'
import NumberList from './NumberList'
import personService from '../services/persons'
import Notification from './Notification'

const App = ( props ) => {

	const [persons, setPersons] = useState ([])

	// newName state is meant for controlling the form input element
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [newFilter, setNewFilter] = useState('')
	// TODO: Document this functionality.  
	const [newPersonList, setNewPersonList] = useState([])
	const [errorMessage, setErrorMessage] = useState('')
	const [informationMessage, setInformationMessage] = useState('')
	

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

/* ------------------------------------------------- */

      const handleNameChange = (event) => {
        setNewName(event.target.value)
      }

      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }

      const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
      }

/* ------------------------------------------------- */

	// This could be moved to NumberList
      const addName = (event) => {
       	 event.preventDefault()
  
        /* New personObject 
	 * 	--> Receives content from components newName state.
	 */ 	
        	const personObject = {
	          name: newName.trim(),
        	  number: newNumber,
        	}	
        
        /* Duplicate checking functionality. 
	 *	--> checkValue of 0
	 *	--> Loop over the array
	 *	--> If there is a duplicate entry in the array
	 *		--> checkValue to 1
	 *		--> Alert that there is already a value on phonebook
	 *		--> Clear State
	 */ 
	var checkValue = 0 
        for (var i = 0; i < persons.length; i++) {
  
          if (persons[i].name === personObject.name) {
            checkValue = 1
          } 
        }
  
        if (checkValue === 1) {
			console.log(`${newName} is already added to phonebook`)
			setErrorMessage (
				`${newName} is already added to phonebook`
			)
			setTimeout(() => {
				setErrorMessage(null)
			}, 5000)
				/*
		setErrorMessage = (
			`${newName} is already added to phonebook`
		)
		setTimeout(() => {
			setErrorMessage(null)
		}, 5000)
		*/
          // alert(`${newName} is already added to phonebook`)
          setNewName('') 
          setNewNumber('')
        } else {

	/* Create personService, which has all the necessary API functionality.
	 * --> Create personObject with contents of the form.
	 *  --> Update Person List status, concat the new object to the list.
	 *  --> Clear the setters.
	 *  --> After this, log the succesfully entered Object's name.
	 */ 
          personService
          .create(personObject)
              .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              // setNewPersonList(persons.concat(returnedPerson))
              setNewName('') 
              setNewNumber('')
          })

    setInformationMessage(
		`${newName} succesfully added to phonebook`
	)
	setTimeout(() => {
		setInformationMessage(null)
	}, 5000)
	console.log(`${newName} succesfully added to phonebook`)

	// TODO: Are these necessary?
	  setNewName('')
          setNewNumber('')
        }
    }    

	const deletePerson = (name, id) => {
		return () => {
			if (window.confirm(`Confirm deletion of ${name}`)) {
				console.log("attempting the delete")
				personService 
					.deleteId(id)
				.then(() => {
					setPersons(persons.filter(n => n.id !== id))
					setNewName('')
					setNewNumber('')
					setInformationMessage(
						`${name} was succesfully deleted`
					)
					setTimeout(() => {
						setInformationMessage(null)
					}, 5000)
					console.log(`deletation of ${name} was succesful`)
				})
				.catch(error => {
					setErrorMessage(
						`${name} was already deleted from the server`
					)
					setTimeout(() => {
						setErrorMessage(null)
					}, 5000)
					setPersons(persons.filter(n => n.name !== name))
				})
			}
		}
 	}

	 // <PositiveNotification message={errorMessage} /> 

  return (
    <div>
      <h2>Phonebook</h2>

	<Notification 
		errorMessage={errorMessage}
		informationMessage={informationMessage}
	/>
	
	<Search 
		newFilter={newFilter}
		handleFilterChange={handleFilterChange}
		setNewPersonList={setNewPersonList}
		persons={persons}
	/>

	<PersonForm 
		persons={persons}
	  	addName={addName}
	  	setPersons={setPersons}
	        newName={newName}
        	setNewName={setNewName}
		newNumber={newNumber}
		setNewNumber={setNewNumber}
		newPersonList={setNewPersonList}
		setNewPersonList={setNewPersonList}
        	handleNameChange={handleNameChange}
		handleNumberChange={handleNumberChange}
	/>

	<NumberList 
		newPersonList={newPersonList}
		setPersons={setPersons}
		persons={persons}
		deletePerson={deletePerson}
	/>

    </div>
  )
}

export default App;
