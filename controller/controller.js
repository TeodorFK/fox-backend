const axios = require('axios');
const Fox = require('../model/fox_model');

const fox1 = async (req, res) => {
  try {
    const randomFox1 = await fetchFox();
    res.json(randomFox1);
  } catch (err) {
    res.json({ err: 'Failed to fetch fox' });
  }
};
const fox2 = async (req, res) => {
  try {
    const randomFox2 = await fetchFox();
    res.json(randomFox2);
  } catch (err) {
    res.json({ err: 'Failed to fetch fox' });
  }
};

async function fetchFox() {
  try {
    const result = await axios.get('https://randomfox.ca/floof/');
    const foxImage = result.data.image;

    let fox = await Fox.findOne({ foxImage });
    if (!fox) {
      fox = new Fox({
        foxImage,
        score: 0,
      });
      await fox.save();
    }

    return foxImage;
  } catch (err) {
    console.log('Error fatching fox', err);
    throw err;
  }
}

module.exports = { fox1, fox2 };
