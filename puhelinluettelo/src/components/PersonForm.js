import React from 'react';

const PersonForm = (props) => {
  return (
    <>
    <form onSubmit={props.addPerson}>
      <table>
        <tbody>
        <tr>
          <td>Nimi:</td><td><input value={props.newName} onChange={props.handleNameInput} /></td>
        </tr>
        <tr>
          <td>Puhelin:</td><td><input value={props.newNumber} onChange={props.handleNumberInput} /></td>
        </tr>
        <tr>
          <td><button key={props.add} type="submit">Lisää</button></td><td></td>
        </tr>
        </tbody>
        </table>
    </form>
    <button key={props.change} onClick={props.handleUpdate}>Vaihda numero</button>
    </>
  )

}

export default PersonForm
