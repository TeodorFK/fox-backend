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

const score = async (req, res) => {
  const foxId = req.params.foxId;
  try {
    const fox = await Fox.findByIdAndUpdate(
      foxId,
      { $inc: { score: 1 } },
      { returnDocument: 'after' },
    );

    res.json({ message: 'Vote recorded', score: fox.score });
  } catch (err) {
    console.log(err);
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

    return fox;
  } catch (err) {
    console.log('Error fetching fox', err);
    throw err;
  }
}

module.exports = { fox1, fox2, score };
