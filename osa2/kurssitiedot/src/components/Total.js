import React from 'react'

const Total = (props) => {

    // console.log(parts)

    /*
    const totalExercises = parts.reduce(function(sum, element) {
      console.log("element:", sum, element )
      return sum + element.exercises
    }, 0)
    */

    // 2a kurssitiedot step 7

    var parts = props.course.parts;
    const totalExercises = parts.reduce((sum, element) => sum + element.exercises, 0)

    return (
      <div>
        <b>Number of exercises: {totalExercises} </b>
      </div>
    )
  }

export default Total;