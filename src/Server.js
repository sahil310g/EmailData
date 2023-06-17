const express = require('express');
const { spawn } = require('child_process');
const app = express();

app.get('/python-data', (req, res) => {
  const pythonProcess = spawn('python', ['email_data.py']);

  pythonProcess.stdout.on('data', (data) => {
    const output = data.toString();
    res.send(output);
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(data.toString());
    res.status(500).send('Error executing Python file');
  });
});

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
