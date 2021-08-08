import React from 'react'

const Header = (props) => {

  const courses = props.course;
  // console.log(courses)

  var headers = courses.map(function(course) {
      return course.name + ' '
  })

  // console.log(headers)

  return (
    <div>
        <h3>
          {headers}
        </h3>
    </div>
  )
}
export default Header;