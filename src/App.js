import React from 'react';
import NavBar from './components/layout/NavBar';
import Contacts from './components/contactTable/Contacts';
import FormDialog from './components/forms-dialogs/FormDialog';
import { ContactData } from './context';

function App() {
  return (
    <ContactData>
      <div className="App">
        <NavBar branding="Contact Manager" />
        <Contacts />
        <FormDialog />
      </div>
    </ContactData>
  );
}

export default App;
