import React from 'react'

/* ------------------------------------- */
/* ------------------------------------- */
/* ------------------------------------- */

const Person = (props) => {

    let person = props.person

    return (
        <li>
            {person.name} {person.number}
        </li>
    )
}

export default Person