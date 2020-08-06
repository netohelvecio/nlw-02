import express from 'express';

const app = express();

app.use(express.json());

app.use('/', (request, response) => {
  return response.json({ message: 'NLW #02 sfasdsa' });
});

app.listen(3333, () => {
  console.log('Server is running on port 3333 🚀');
});
