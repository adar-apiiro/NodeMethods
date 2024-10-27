const express = require('express');
const app = express();

function setupRoutes() {
  app.get('/', (req, res) => {
    res.send('Hello from a declared function!');
  });
}

// Function called to set up routes
setupRoutes();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
