export default function guardrail(mathFunction) {
  const queue = [];
  
  try {
    const result = mathFunction(); // Execute the mathFunction
    queue.push(result); // Append the result to the queue
  } catch (error) {
    queue.push(`Error: ${error.message}`); // Append the error message to the queue
  } finally {
    queue.push('Guardrail was processed'); // Always append this message
  }
  
  return queue; // Return the queue
}

