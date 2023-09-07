const express = require('express');
const app = express();
const port = 3000; // You can change this to your desired port number

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render an EJS template
app.get('/', (req, res) => {
  // Sample data to pass to the template
  const data = {
    title: 'Sample EJS Example',
    message: 'Hello, EJS!'
  };

  // Render the "index.ejs" template and pass the data to it
  res.render('index', { data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= data.title %></title>
</head>
<body>
  <h1><%= data.message %></h1>
</body>
</html>

