process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Remove trailing newlines or spaces
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit();
});

// Ensure the exit message is displayed
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
