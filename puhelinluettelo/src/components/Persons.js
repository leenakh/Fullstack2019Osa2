import React from 'react';

const Remove = (props) => {
  return (
  <button onClick={props.handleRemove}>Poista</button>
  )
}

const Person = props => {
  return (
    <p>
      {props.person.name} <br/>
      {props.person.number} <br/>
      <Remove handleRemove={() => props.handleRemove(props.person.id)}/>
    </p>
  )
}

const Persons = (props) => {
  const hakusana = props.haku
  let renderoitava = props.persons
  if (hakusana !== '') {
  renderoitava = props.persons.filter(person => person.name.toLowerCase().startsWith(hakusana.toLowerCase()))
  }
  return (
  renderoitava.map(person =>
    <Person
      key={person.id}
      person={person}
      handleRemove={props.handleRemove} />
  )
  )
  
}


export default Persons