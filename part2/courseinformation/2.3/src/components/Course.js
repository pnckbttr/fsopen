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
    const Total = () => {
        const exercisesArray = course.parts.map(part => part.exercises)
        const reduceCallback = (valuesSum, value) => valuesSum + value
        const total = exercisesArray.reduce(reduceCallback)
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