import React, { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    {name: 'Horst Otto'}
  ])
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) =>{
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))

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
