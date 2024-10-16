import React from 'react';

const About = () => {
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
      <h2 className="mt-4">About Me</h2>
      <p>
        I'm Dela Cruz, Justine S., a 3rd year computer science student at the University of Cabuyao. 
      </p>
      <p>
        In my free time, I love watching anime and playing games. I also love fixing mountain bikes and
        fixie bikes. 
      </p>
    </div>
  );
};

export default About;