import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note'
import noteService from '../services/notes'
import Notification from '../components/Notification'

/* ------------------------------------------------------------ */

const App = ( props ) => {
	const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState('')
	const [showAll, setShowAll] = useState(true)
	const [errorMessage, setErrorMessage] = useState('some error happened...')
	

    useEffect(() => {
        noteService
            .getAll()
                .then(initialNotes => {
                setNotes(initialNotes)
                })
    }, [])

	const Footer = () => {
		const footerStyle = {
			color: 'green',
			fontStyle: 'italic',
			fontSize: 16 
		}

		return (
			<div>
				<em>Note app, Department of Computer Science, University of Helsinki</em>
			</div>
		)
	}

	const addNote = (event) => {
        event.preventDefault() // this makes sure that page doesn not reload

        /* create new object for the note, and it will reiceve its content from the components newNote state */
        const noteObject = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
        }
        /*
        axios
            .post('http://localhost:3001/notes', noteObject)
            .then(response => {
                // console.log(response)
                setNotes(notes.concat(response.data))
                setNewNote('')
            })
        */
       noteService
            .create(noteObject)
                .then(returnedNote => {
                    setNotes(notes.concat(returnedNote))
                    setNewNote('')
                })
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true)

    const toggleImportanceOf = (id) => {
	const note = notes.find(n => n.id === id)
	const changedNote = { ...note, important: !note.important }
	
	noteService 
		.update(changedNote).then(returnedNote => {
		setNotes(notes.map(note => note.id !== id ? note : returnedNote))
	    })
		.catch(error => {
			setErrorMessage(
				`Note '${note.content}' was already removed from server`
			)
			setTimeout(() => {
				setErrorMessage(null)
			}, 5000)
			setNotes(notes.filter(n => n.id !== id))
	    })
    }

    return (
      <div>
            <h1>Notes</h1>
	    <Notification message={errorMessage} />
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show { showAll ? 'important' : 'all' }
                </button>
            </div>
            <ul>
                {notesToShow.map((note) =>
                    <Note 
                        key={note.id} 
                        note={note} 
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input 
                    value={newNote} 
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
	    <Footer />
      </div>
    )
}

export default App
