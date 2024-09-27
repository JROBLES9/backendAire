const express = require('express');
const dotenv = require('dotenv');

const aireAcondicionadodRoutes = require('./routes/aireAcondicionado');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/aireAcondicionado', aireAcondicionadodRoutes);

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});