import React from 'react'

const Content = (props) => {

    const courses = props.course;

    /* testing how the data is laid off in JSON object */

    /*
    console.log( courses[0].name )
    console.log( courses[0].parts[0].name )
    console.log( courses[0].parts[0].exercises )

    console.log( courses[1].name )
    console.log( courses[1].parts[0].name )
    console.log( courses[1].parts[0].exercises )
    console.log( courses[1].parts[1].name )
    console.log( courses[1].parts[1].exercises )
    */

    /* strategy is to create list with rendered values in special order in order to render data correctly */

    var courseData = []

     for (var i = 0; i < courses.length; i++) {

      /* first loop adds nested list to array for each course, the first key is course name which is saved as h3 */

      var appendData = []
      var totalExercises = 0

      appendData.push(<h3 key={courses[i].name}>{courses[i].name}</h3>)
      courseData.push(appendData)

      for (var j = 0; j < courses[i].parts.length; j++) {

        /* second loop fills the desired details of the course - name, exercises and keeps track of the total exercises, which is rendered last */

          courseData[i].push(<p key={courses[i].parts[j].name}>{courses[i].parts[j].name + ' ' + courses[i].parts[j].exercises}</p>)
          totalExercises += courses[i].parts[j].exercises
      }
      appendData.push(<h4 key={courses[i].id}>total of {totalExercises} exercises</h4>)
    }

    return (
      <div>
          {courseData}
      </div>
    )
  }

export default Content;