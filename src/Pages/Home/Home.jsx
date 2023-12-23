import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [executionresult, setExecutionResult] = useState('');

  const handleButtonClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/run-python');
      setExecutionResult(response.data.success ? response.data.output : response.data.error);
    } catch (error) {
      console.error('Error running Python code:', error);
    }
  };

  return (
    <div>
      <h1>Meet Link</h1>
      <button onClick={handleButtonClick}>Run Python Code</button>
      <div>
        <strong>Result:</strong>
        <pre>{executionresult}</pre>
      </div>
    </div>
  );
}

export default Home;
