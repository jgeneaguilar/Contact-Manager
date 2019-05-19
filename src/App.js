import React from 'react';
import NavBar from './components/NavBar';
import Contacts from './components/Contacts';
import { ContactData } from './context';


function App() {
  return (
    <ContactData>
      <div className="App">
        <NavBar branding="Contact Manager" />
        <Contacts />
      </div>
    </ContactData>
  );
}

export default App;
