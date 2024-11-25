const express = require('express');
const fs = require('fs');

const app = express();

// Helper function to read and parse the CSV file asynchronously
const readDatabase = (dbPath) => (
  new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      resolve(data);
    });
  })
);

// Handle the / endpoint
app.get('/', (req, res) => res.send('Hello Holberton School!'));

// Handle the /students endpoint
app.get('/students', async (req, res) => {
  const dbPath = process.argv[2]; // Get the database file path from command line arguments

  try {
    const data = await readDatabase(dbPath);
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
    const students = lines.map((line) => line.split(','));
    const totalStudents = students.length - 1; // Exclude the header row

    let response = 'This is the list of our students\n';
    response += `Number of students: ${totalStudents}\n`;

    // Group students by their field of study (e.g., CS, SWE)
    const fields = {};
    students.forEach((student, index) => {
      if (index > 0) { // Skip the header row
        const [firstName, field] = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    // Prepare the output for each field
    Object.keys(fields).forEach((field) => {
      response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
    });

    res.send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server running on http://localhost:1245');
});

// Export the app object
module.exports = app;
