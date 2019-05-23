import React from 'react';
import NavBar from './components/layout/NavBar';
import Contacts from './components/contactTable/Contacts';
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
