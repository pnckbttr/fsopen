import React, { useCallback, useState } from 'react'


const Display = (props) => {

  const persons = props.persons
  const found = props.found
  const foundPerson = props.foundPerson

  const shownPersons = foundPerson
  ? <li>{found.name} {found.number}</li>
  : persons.map(person =>
   <li key={person.name}>{person.name} {person.number}</li>)



    return (
        <div>
        {shownPersons}
        </div>
    )
}

export default Display