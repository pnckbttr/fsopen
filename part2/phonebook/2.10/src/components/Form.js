import React, { useCallback, useState } from 'react'


const Form = (props) => {

  const persons = props.persons
  const setPersons = props.setPersons
  const newName = props.newName
  const newNumber = props.newNumber
  const handleNameChange = props.handleNameChange
  const handleNumberChange = props.handleNumberChange

  const addPerson = (event) => {
    event.preventDefault()

    const checkName = () => {
      const personsArray = persons.map(person => person.name)
      if (personsArray.indexOf(newName) > -1 ) {        
        alert(`${newName} is already in phonebook`)
      } else {
        const newPerson = {
          name: newName,
          number: newNumber
          }
        setPersons(persons.concat(newPerson))
      }
    }
    checkName()
  }

  

    return (
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    )
}

export default Form