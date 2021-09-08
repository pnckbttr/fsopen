import React, { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Horst Otto',
      number: '030-457389' },
    { name: 'Wurst Brötchen',
      number: '030-8923836'},
    { name: 'Rumpel Stilzchen',
      number: '030-183453'}
  ])
  
  const [newName, setNewName] = useState('')
 
  const [newNumber, setNewNumber] = useState('')

  const [lowerCaseNames, setLowerCaseNames] = useState('')

  const [foundPerson, setFoundPerson] = useState(false)

  const [found, setFound] = useState('')

  const shownPersons = foundPerson
         ? <li>{found.name} {found.number}</li>
         : persons.map(person =>
          <li key={person.name}>{person.name} {person.number}</li>)

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

  const handleFilter = (event) => {
    setLowerCaseNames(persons.map(
      person => person.name.toLowerCase()
        )
      )
    if (lowerCaseNames.includes(event.target.value)) {
      setFoundPerson(true)
      setFound(persons[lowerCaseNames.indexOf(event.target.value)])     
    } else {
      setFoundPerson(false)
      setFound('')
        }
      }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter: <input onChange={handleFilter}/>
      </div>
      <h2>add new</h2>
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
      {shownPersons}
    </div>
  )
}

export default App;
