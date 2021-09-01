import React, { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.clicked}>{props.text}</button>
    )
}



const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
        'Program testing can be used to show the presence of bugs, but never to show their absence!',
        'Every good work of software starts by scratching a developer\'s personal itch',
        'A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.',
        'It\'s OK to figure out murder mysteries, but you shouldn\'t need to figure out code. You should be able to read it.' 
    ]

    const random = () => {
        const generated = Math.floor(Math.random() * anecdotes.length)

            console.log(generated)
            setSelected(generated)   
    }



    const pointarray = new Array(anecdotes.length)
    pointarray.fill(0, 0, anecdotes.length)   

    const [points, setPoints] = useState(pointarray)

    console.log(points)

    const logvote = () => {
        const pointcopy = [...points]
        pointcopy[selected] += 1
        setPoints(pointcopy)
    }

    const [selected, setSelected] = useState(0)

    return (
        <div>
            {anecdotes[selected]}
            <br/>
            <Button text='vote' clicked={logvote}/>
            <Button text='next anecdote' clicked={random}/>
        </div>
        )
}


export default App