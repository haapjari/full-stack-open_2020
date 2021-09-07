import React from 'react'

const Search = props => {

    var defaultValue = props.defaultValue
    var handleValueChange = props.handleValueChange

    // enter some value to show as default in the search bar
    defaultValue = "Search ..."

    return (
        <div>
            <h3>Country Search</h3>
            <input
                value={defaultValue}
                onChange={(event => {
                    handleValueChange(event)
                })}
            />
        </div>
    )
}

export default Search