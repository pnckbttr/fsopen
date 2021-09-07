import React, { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Horst Otto',
      number: '030-457389' }
  ])
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

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
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {persons.map(person =>
      <li key={person.name}>{person.name} {person.number}</li>)}
    </div>
  )

}


export default App;
