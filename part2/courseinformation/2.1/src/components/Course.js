import React from 'react'

const Course = ({course}) => {
    const Header = () => {
        return (
        <h2>
            {course.name}
        </h2>
        )
    }
    const Part = () => {     
        return (
            course.parts.map(
          part => <p key={part.id}>{part.name} {part.exercises}
          </p>
            )
        )
    }
    const Content = () => {
        return (       
            <Part/>
        )
    }
    return (
        <div>
        <Header/>
        <Content course={course}/>
        </div>
    )
}

export default Course