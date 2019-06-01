import React from 'react';
import NavBar from './components/layout/NavBar';
import Contacts from './components/contactTable/Contacts';
import FormFields from './components/forms-dialogs/FormFields';
import { ContactData } from './context';

function App() {
  return (
    <ContactData>
      <div className="App">
        <NavBar branding="Contact Manager" />
        <Contacts />
        <FormFields />
      </div>
    </ContactData>
  );
}

export default App;
