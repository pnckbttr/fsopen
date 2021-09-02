import React from 'react'


const Course = ({courses}) => {

    const reducer = (totalExercises, currentExercise) => 
            totalExercises + currentExercise
        
    const content = courses.map(course =>

        <div key={course.id}>
            
            <h3 key={course.id}>{course.name}</h3> 

        {course.parts.map(part =>

            <div key={part.id}>

            <p key={part.id}>{part.name} {part.exercises}</p>
            
            </div>

             )
            }

        <b>
            total of {

            courses[course.id-1].parts.map(part =>
            part.exercises).reduce(reducer)

            } exercises
        </b> 

        </div>     
    )

    return (  
        <div>
            {content}
        </div>    
        )
    }


export default Course