import React, { useState } from 'react';
import './App.css'

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [showData, setShowData] = useState(false);
  const [massege, setMassege] = useState('')
  const onButton = () => {
    setMassege('Success!')
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowData(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          style={{ display: 'flex',justifyContent:'center', padding: '5px', width: '200px', textAlign: 'center',alignItems:'center',flexDirection: 'column' }}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
          style={{display: 'flex',justifyContent:'center', padding: '5px', width: '200px', textAlign: 'center',alignItems:'center',flexDirection: 'column' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          style={{ display: 'flex',justifyContent:'center', padding: '5px', width: '200px', textAlign: 'center',alignItems:'center',flexDirection: 'column' }}
        />
        <button onClick={onButton} className='button' type="submit" style={{display: 'flex',justifyContent:'center', padding: '5px', backgroundColor: 'green', color: 'white', border: 'none'}}>
          Register
        </button>
        <p>{massege}</p>
      </form>
      {showData && (
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
