// Display initial prompt
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Trim extra spaces or newlines
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit(); // Exit the process after handling input
});

// Listen for the exit event to display the closing message
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
