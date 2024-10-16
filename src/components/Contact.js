import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create an object to hold the form data
    const formData = { name, email, message };

    // Navigate to the submission success page with the form data
    navigate('/submission-success', { state: formData });

    // Reset the form fields after submission (optional)
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div 
      className="container text-center" 
      style={{ 
        backgroundColor: 'white', 
        color: 'white', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '20px' // Optional padding to prevent text from touching the edges
      }}
    >
      <h2 className="mt-4">Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea 
            className="form-control" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;