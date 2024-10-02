/**
 * This function returns a promise that simulates an API response.
 * It creates a new Promise object and immediately resolves it, 
 * simulating a successful API call. You can add additional logic 
 * inside the promise if needed.
 */

export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // You can add some logic here if needed.
    resolve();
  });
}
