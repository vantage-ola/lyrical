import React from "react";

const Error = ({ error }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const errorStyle = {
    color: '#721c24',
    textAlign: 'center',
    maxWidth: '400px',
  };

  return (
    <div style={containerStyle}>
      <div style={errorStyle}>
        <h2 style={{ margin: '0 0 10px' }}>Uh-oh! We encountered a problem.</h2>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Error;
