import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact 
        name="John Doe"
        email="jdoe@gmail.com"
        phone="888-888-8888"
      />
      <Contact
        name="Karen Smith"
        email="karen@gmail.com"
        phone="444-444-4444"
      />
    </div>
  );
}

export default App;
