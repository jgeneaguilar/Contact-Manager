import React from 'react';
import NavBar from './components/layout/NavBar';
import Contacts from './components/contactTable/Contacts';
import AddContact from './components/forms-dialogs/AddContact';
import { ContactData } from './context';


function App() {
  return (
    <ContactData>
      <div className="App">
        <NavBar branding="Contact Manager" />
        <Contacts />
        <AddContact />
      </div>
    </ContactData>
  );
}

export default App;
