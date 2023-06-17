import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [result, setResult] = useState('');
  const [pythonCode, setPythonCode] = useState('');

  const handleExecutePython = async () => {
    axios
      .get("http://localhost:5001/python-data")
      .then((response) => {
        console.log(response.data);
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
  };


  return (
    <div>
      <h1>Calling Python from JSX</h1>
      <textarea value={pythonCode} onChange={(e) => setPythonCode(e.target.value)} />
      <button onClick={handleExecutePython}>Execute Python</button>
      <p>Result: {result}</p>
      
    </div>
  );
}

export default App;
