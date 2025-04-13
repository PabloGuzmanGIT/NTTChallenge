// server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/random-users', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    const users = response.data.results;

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching random users' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

