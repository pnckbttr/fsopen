import React, { useState } from 'react'
import Filter from './components/Filter.js'
import Form from './components/Form.js'
import Display from './components/Display.js'

// could probably be less code here but this took long enough

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

  const [foundPerson, setFoundPerson] = useState(false)

  const [found, setFound] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)   
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)   
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFound={setFound} 
              setFoundPerson={setFoundPerson}/>

      <h3>add new</h3>
      <Form persons={persons} setPersons={setPersons}
            handleNameChange={handleNameChange}
            handleNumberChange={handleNumberChange}
            newName={newName} newNumber={newNumber}/>

      <h3>Numbers</h3>
      <Display persons={persons} found={found}
                foundPerson={foundPerson} />
    </div>
  )
}

export default App
