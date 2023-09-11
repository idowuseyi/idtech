const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Sample in-memory database (you can replace this with your chosen database)
const people = [];

// Create a new person
app.post('/api/people', (req, res) => {
  const { name, age } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Invalid name' });
  }
  if (!age || typeof age !== 'number') {
    return res.status(400).json({ error: 'Invalid age' });
  }
  const person = { name, age };
  people.push(person);
  res.status(201).json(person);
});

// Read details of a person by name
app.get('/api/people/:name', (req, res) => {
  const { name } = req.params;
  const person = people.find((p) => p.name === name);
  if (!person) {
    return res.status(404).json({ error: 'Person not found' });
  }
  res.json(person);
});

// Update details of an existing person by name
app.put('/api/people/:name', (req, res) => {
  const { name } = req.params;
  const { age } = req.body;
  const person = people.find((p) => p.name === name);
  if (!person) {
    return res.status(404).json({ error: 'Person not found' });
  }
  if (typeof age !== 'number') {
    return res.status(400).json({ error: 'Invalid age' });
  }
  person.age = age;
  res.json(person);
});

// Remove a person by name
app.delete('/api/people/:name', (req, res) => {
  const { name } = req.params;
  const index = people.findIndex((p) => p.name === name);
  if (index === -1) {
    return res.status(404).json({ error: 'Person not found' });
  }
  const removedPerson = people.splice(index, 1);
  res.json({ message: 'Person removed', person: removedPerson });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

