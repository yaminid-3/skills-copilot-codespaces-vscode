// Create web server
// create a web server that listens on port 8080
// and serves the files in the "public" directory

const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});