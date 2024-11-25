const express = require('express');

const app = express();

// Define the endpoint to respond with "Hello Holberton School!"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server running on http://localhost:1245');
});

// Export the app object
module.exports = app;
