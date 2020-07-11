import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
app.get('/', (req, res) => {
  res.send('Hey the backend is running by the way');
});
