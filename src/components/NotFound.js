import React from "react";

const NotFound = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '2rem',
    color: '#555',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <p>404. Not Found.</p>
    </div>
  );
};

export default NotFound;
