const express = require('express');
const router = require('./routes/routes');
const dbhandler = require('./config/db');
const app = express();

app.use('/', router);

async function start() {
  await dbhandler.connectToDatabase('mongodb://10.12.5.13:27017/cute-fox');
  app.listen(4000, () => {
    console.log('Server running on port 4000');
  });
}

start();
