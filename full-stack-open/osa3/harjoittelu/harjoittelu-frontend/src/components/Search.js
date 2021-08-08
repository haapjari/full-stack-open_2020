import React from 'react'

const Search = props => {

    var newFilter = props.newFilter
    var handleFilterChange = props.handleFilterChange
    var setNewPersonList = props.setNewPersonList
    var persons = props.persons

    const filterResults = (searchQuery) => {

        //  refactor -> regex
        const results = persons.filter(person => person.name.toLowerCase().includes(searchQuery))
        // console.log(persons)

        if (results.length < 1) {
          setNewPersonList(persons)
          return
        }

        setNewPersonList(results)
      }

    /* props.persons */

    return (
       <div>
           <h3>new search</h3>
        <div>
            <input 
              value={newFilter}
              onChange={(event) => {
                handleFilterChange(event)
                filterResults(event.target.value.toLowerCase())
              }}
            />
        </div>
       </div>
    )
}

export default Search