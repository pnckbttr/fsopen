import React, { useState } from 'react'

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
    const Total = () => {
        const exercisesArray = course.parts.map(part => part.exercises)
        let total = 0
        exercisesArray.forEach(number => total += number)
        return (
            <b>total of {total} exercises</b>
        )
    }


    const Content = () => {
        return (
            <div>      
            <Part/>
            </div>
        )
    }
    return (
        <div>
        <Header/>
        <Content course={course}/>
        <Total/>
        </div>
    )
}

export default Course