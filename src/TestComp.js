import React, { useEffect, useState } from 'react';

function TestComponent() {
  const [testMessage, setTestMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTestMessage(data.message);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>API Test</h2>
      {testMessage ? (
        <p>Message from API: {testMessage}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TestComponent;