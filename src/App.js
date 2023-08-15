import React, { useEffect, useState } from 'react';
import './../src/styles/App.css';
import AddPersonForm from './components/AddPersonForm';
import CombinedList from './components/CombinedList';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addPerson(name, surname, age, tel) {
    setContacts([...contacts, { name, surname, age, tel }]);
  }

  function deletePerson(updatedContacts) {
    setContacts(updatedContacts);
  }

  function editPerson(updatedContacts) {
    setContacts(updatedContacts);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <CombinedList data={contacts} onDelete={deletePerson} onEdit={editPerson} />
    </div>
  );
}

export default App;
