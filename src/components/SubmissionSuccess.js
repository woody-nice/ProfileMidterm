import React from 'react';
import { useLocation } from 'react-router-dom';

const SubmissionSuccess = () => {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  return (
    <div 
      className="container text-center" 
      style={{ 
        backgroundColor: 'white', 
        color: 'black', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '20px',
        borderRadius: '8px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Submission Successful!</h2>
      <p style={{ margin: '10px 0' }}>Thank you, <strong>{name}</strong>! Your message has been sent.</p>
      <p style={{ margin: '10px 0' }}><strong>Email:</strong> {email}</p>
      <p style={{ margin: '10px 0' }}><strong>Message:</strong> {message}</p>
      <button 
        className="btn btn-primary mt-3" 
        onClick={() => window.location.href = '/'}
      >
        Back to Home
      </button>
    </div>
  );
};

export default SubmissionSuccess;