const express = require('express');
const router = require('./routes/routes');
const dbhandler = require('./config/db');
const app = express();


//Routes
app.use('/', router);

//Startet serveren
async function start() {
  //Startet med å koble til mongodb databasen
  await dbhandler.connectToDatabase('mongodb://10.12.5.13:27017/cute-fox');
  //Kobler til localhost://4000.
  app.listen(4000, () => {
    console.log('Server running on port 4000');
  });
}

start();
