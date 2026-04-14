const mongoose = require('mongoose');


//Kobler til databasen
async function connectToDatabase(uri, dbName) {
  try {
    //Lager tilkobling til mongodbmed URI og database navnet
    const result = await mongoose.connect(uri, { dbName });
    //Sier hvilke database man er koblet til 
    if (result) {
      console.log(`connected to ${result.connection.name}`);
    }
  } catch (err) {
    console.log(`dbhandler.js:connectToDatabase -> ${err}`);
  }
}

module.exports = {
  connectToDatabase,
};
