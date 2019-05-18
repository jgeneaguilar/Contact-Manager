import React from 'react';
import NavBar from './components/NavBar';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="App">
      <NavBar branding="Contact Manager" />
      <Contacts />
    </div>
  );
}

export default App;
