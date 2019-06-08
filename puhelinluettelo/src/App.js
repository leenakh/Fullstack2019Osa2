import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Haku from './components/Haku';
import personfactory from './services/personfactory';
import Ilmoitus from './components/Ilmoitus';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Nimi')
  const [newNumber, setNewNumber] = useState('Puhelinnumero')
  const [newHaku, setNewHaku] = useState('')
  const [uusiPalaute, setUusiPalaute] = useState(null)
  const [uusiVirhe, setUusiVirhe] = useState(null)

  useEffect(() => {
    console.log('effect')
    personfactory
      .getAll()
      .then(response => {
        console.log('promise fullfilled')
        setPersons(response.data)
      })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const nimi = newName
    let isInPhonebook = persons.filter(person => person.name === nimi)
    if (isInPhonebook.length > 0) {
      setUusiVirhe(`${nimi} on jo täällä!`)
      setTimeout(() => {
        setUusiVirhe(null)
      }, 5000)
    }
    if (isInPhonebook.length === 0) {
      personfactory
        .create(personObject)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(response.data))
          setUusiPalaute(`${nimi} lisättiin puhelinluetteloon.`)
          setTimeout(() => {
            setUusiPalaute(null)
          }, 5000)
        })
        .catch(error => {
          setUusiVirhe('Ei onnistunut!')
          setTimeout(() => {
            setUusiVirhe(null)
          }, 5000)
        })
    }
    isInPhonebook.length = 0
    setNewName('Nimi')
    setNewNumber('Puhelinnumero')
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleHakuInput = (event) => {
    setNewHaku(event.target.value)
  }

  const handleRemove = (id) => {
    console.log(`id: ${id}`)
    if (window.confirm('Poistetaanko yhteystieto?')) {
      personfactory
        .remove(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
          setUusiPalaute('Poisto onnistui.')
          setTimeout(() => {
            setUusiPalaute(null)
          }, 5000)
        }
        )
        .catch(error => {
          setUusiVirhe('Ei onnistunut!')
          setTimeout(() => {
            setUusiVirhe(null)
          }, 5000)
        })
    }
  }

  const handleUpdate = () => {
    try {
      const personToUpdate = persons.find(person => person.name === newName)
      const updatedPerson = { ...personToUpdate, number: newNumber }

      personfactory
        .update(personToUpdate.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson))
          setUusiPalaute(`Henkilön ${newName} puhelinnumero vaihdettiin.`)
          setNewName('Nimi')
          setNewNumber('Puhelinnumero')
          setTimeout(() => {
            setUusiPalaute(null)
          }, 5000)
        })
        .catch(error => {
          setUusiVirhe('Ei onnistunut! Henkilö on poistettu luettelosta.')
          setTimeout(() => {
            setUusiVirhe(null)
          }, 5000)
          console.log('poistettu', personToUpdate.id)
          setPersons(persons.filter(person => person.id !== personToUpdate.id))
        })
    } catch (error) {

    }
    console.log('Mitä tapahtui?')
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Ilmoitus viesti={uusiPalaute} tyyppi="palaute" />
      <Ilmoitus viesti={uusiVirhe} tyyppi="virhe" />
      <div>
        <Haku newHaku={newHaku} handleHakuInput={handleHakuInput} />
      </div>
      <h2>Lisää uusi henkilö luetteloon</h2>
      <div>
        <PersonForm
          addPerson={addPerson}
          newName={newName}
          handleNameInput={handleNameInput}
          newNumber={newNumber}
          handleNumberInput={handleNumberInput}
          handleUpdate={handleUpdate}
        />
      </div>
      <h2>Numerot</h2>
      <div>
        <Persons haku={newHaku} persons={persons} handleRemove={handleRemove} />
      </div>
    </div>
  )
}

export default App


