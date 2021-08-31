import React, { useState } from 'react'

const Display = (props) => (
    <h2>
        {props.text}
    </h2>
)

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistics = (props) => {

    return (
    <div>
        good {props.good}
        <br/>
        neutral {props.neutral}
        <br/>
        bad {props.bad}
    </div>
    )
}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const addGood = () => {
        setGood(good + 1)
    }

    const addNeutral = () => {
        setNeutral(neutral + 1)
    }

    const addBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            
            <Display text='give feedback'/>
            <Button handleClick={addGood} text='good'/>
            <Button handleClick={addNeutral} text='neutral'/>
            <Button handleClick={addBad} text='bad'/>
            <Display text='statistics'/>
            <Statistics good={good} neutral={neutral}
                        bad={bad}/>
            

        </div>
    )
}


export default App