import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('123123Hello World!123');
});

app.listen(port, () => {
  return console.log(`123Express is listening at http://localhost:${port}`);
});