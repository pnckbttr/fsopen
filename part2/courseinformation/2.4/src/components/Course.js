import React from 'react'

const Course = ({courses}) => {

    const Content = () => {

        const contentArray = [] 

        for (const course of courses) {

            const courseTitle = <h3 key={course.id}>{course.name}</h3>

            contentArray.push(courseTitle)

            let number = 0

            for (const part of course.parts) {

                const coursePart =
                <p key={part.name}>{part.name} {part.exercises}</p>

                contentArray.push(coursePart)

                number += part.exercises          
            }
            const total = 
            <p key={number}><b>total of {number} exercises</b></p>

            contentArray.push(total)
        }
        return (
            contentArray
        )
    }

    return (
        
        <Content/>
        
        )
    }



export default Course