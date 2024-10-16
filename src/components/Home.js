import React from 'react';

const Home = () => {
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
        justifyContent: 'center' 
      }}
    >
      <h2 className="mt-4">Home Page</h2>
      <p>Welcome to my profile. I'm Justine Dela Cruz, a simple boy who loves trying out new things.</p>
      <p>My goal is to become a pro player and show others what i'm capable of.</p>
    </div>
  );
};

export default Home;