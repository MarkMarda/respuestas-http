const express = require("express");

const app = express();

app.get('/me', (req, res) => {
  res.status(200).json({
    name: 'Marco Antonio',
    age: '34 años',
    country: 'Mexico',
  });
});

app.post('/metas', (req, res) => {
  const hobbies = [{
    id: 1,
    hobbie: 'Correr'
  },
  {
    id: 2,
    hobbie: 'Senderismo y alta montaña'
  },
  {
    id: 3,
    hobbie: 'Leer'
  }];

  res.status(200).json(hobbies);
});

app.patch('/metas', (req, res) => {
  const professionalGoals = [{
    id: 1,
    professional_goal: 'Trabajar como front-end o back-end en los siguientes 6 meses'
  }, {
    id: 2,
    professional_goal: 'Trabajar como programador en un país de primer mundo'
  }];

  res.status(200).json(professionalGoals);
});

app.put('/business', (req, res) => {
  const companies = [{
    id: 1,
    company: 'Globant'
  }, 
  {
    id: 2,
    company: 'Alguna empresa en Noruega'
  }, 
  {
    id: 3,
    company: 'Alguna empresa en Quebec'
  }];

  res.status(200).json(companies);
});

app.listen(8000, () => {
  console.log('Server started at port 8000')
});