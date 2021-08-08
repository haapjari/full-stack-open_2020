const { response } = require('express')
const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())

// näin otetaan käyttöön middleware
app.use(requestLogger)

// otetaan käyttöön morgan middleware
// käytetään tiny konfiguraation mukaisesti
app.use(morgan('tiny'))

// luodaan token metodi
morgan.token('host', function(req, res) {
    return req.hostname;
})

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2020-01-10T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2020-01-10T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2020-01-10T19:20:14.298Z",
        important: false
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

// Yksittäisen resurssin haku
app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)

    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

// Resurssin poisto
app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

// Datan vastaanottaminen
app.post('/api/notes', (request, response) => {
    const note = request.body
    console.log(note)
    response.json   (note)
})

/* ------------------------ */
/* ------------------------ */
/* ------------------------ */

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path: ', request.path)
    console.log('Body: ', request.body)
    console.log('---')
    next()
}

/* ------------------------ */
/* ------------------------ */
/* ------------------------ */

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})