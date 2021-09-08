import React, { useCallback, useState } from 'react'


const Filter = (props) => {

    const persons = props.persons

    const [lowerCaseNames, setLowerCaseNames] = useState('')

    const setFoundPerson = props.setFoundPerson
  
    const setFound = props.setFound

    const handleFilter = useCallback(event => {
        setLowerCaseNames(persons.map(
          person => person.name.toLowerCase()
            )
          )
        if (lowerCaseNames.includes(
          event.target.value.toLowerCase()
          )) {
          setFoundPerson(true)
          setFound(persons[lowerCaseNames.indexOf(
            event.target.value.toLowerCase()
            )])     
        } else {
          setFoundPerson(false)
          setFound('')
            }
          })
    return (
        <div>
        filter: <input onChange={handleFilter}/>
        </div>
    )
}

export default Filter