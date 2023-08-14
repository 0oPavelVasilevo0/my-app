import React from 'react';
import './../src/styles/App.css';
import AddPersonForm from './components/AddPersonForm';
import CombinedList from './components/CombinedList';

function App() {
  return (
    <div className="App">
      <AddPersonForm />
      <CombinedList />
    </div>
  );
}

export default App;
