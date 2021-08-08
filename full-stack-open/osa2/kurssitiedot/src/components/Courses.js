import React from 'react'
import Content from './Content'

const Courses = (props) => {

    return (
      <div>
        <Content course={props.course} />
      </div>
    )
  }

export default Courses;