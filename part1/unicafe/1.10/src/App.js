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

const StatisticLine = (props) => {
    return (
        [props.text, ' ', props.value, props.extra, <br/>]
    )
}

const Statistics = (props) => {
    if (isNaN(props.avg)) {
        return (
            <div>No feedback given</div>
        )
    }
    return (
    <div>
        <StatisticLine text='good' value={props.good}/> 
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='all' value={props.all}/>
        <StatisticLine text='avg' value={props.avg}/>
        <StatisticLine text='positive' value={props.pos} extra='%'/>
    </div>
    )
}



const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + neutral + bad
    const avg = (good - bad) / all
    const pos = (good / all) * 100

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
                        bad={bad} all={all}
                        avg={avg} pos={pos}/>
            

        </div>
    )
}


export default App