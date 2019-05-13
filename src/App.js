import React from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contacts />
    </div>
  );
}

export default App;
