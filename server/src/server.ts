import express from 'express';

import './database/index';

const app = express();

app.use(express.json());

app.use('/', (request, response) => {
  return response.json({ message: 'NLW #02' });
});

app.listen(3333, () => {
  console.log('Server is running on port 3333 🚀');
});
