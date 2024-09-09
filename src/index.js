import fetch from 'node-fetch';
import dotenv from 'dotenv';
import express from 'express';  

dotenv.config();

const username = process.env.api_username;
const password = process.env.api_password;
const apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';

let allPatientsData = [];

const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
        }
      });

    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    allPatientsData = data;
    console.log(allPatientsData);
    } catch (error) {
        console.warn('Failed to fetch patient data:', error);
    }
};

const startServer = async () => {
  await fetchData();

  const app = express(); 
  const port = process.env.PORT || 3000;

  app.use(express.static('public'));

  app.get('/api/patients', (req, res) => {
    res.json(allPatientsData);
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

startServer();