const axios = require('axios');
const Fox = require('../model/fox_model');

const foxes = async (req, res) => {
  const randomFox1 = await fetchFox();
  const randomFox2 = await fetchFox();
  res.json([randomFox1, randomFox2]);
};

async function fetchFox() {
  try {
    const result = await axios.get('https://randomfox.ca/floof/');
    const url = result.data.image;

    let fox = await fox.findOne({ url });
    if (!fox) {
      fox = new Fox({
        url,
        score: 0,
      });
      await fox.save();
    }

    return url;
  } catch (err) {
    console.log('Error fatching fox', err);
  }
}

module.exports = { foxes };
