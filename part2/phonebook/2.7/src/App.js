import React, { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    {name: 'Horst Otto'}
  ])
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
    
  }

  const addPerson = (event) => {
    event.preventDefault()

    const checkName = () => {
      const personsArray = persons.map(person => person.name)
      if (personsArray.indexOf(newName) > -1 ) {
        
        alert(`${newName} is already in phonebook`)
      } else {
        const newPerson = {
          name: newName
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
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
      <li key={person.name}>{person.name}</li>)}
    </div>
  )

}


export default App;
