const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(cors());

let photos = [];

app.get('/api/photos', async (req, res) => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos/?client_id=5H5Sx7JakH3Oic5qs0meThOP9vClKWLYNBWMCieV_e0"
      );
      const data = await response.json();
      res.json([...photos, ...data]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.post('/api/photos', (req,res) => {
    const {url, description} = req.body;

    if(!url) {
        res.status(400).json({message: "error fetching photo URL"})
    }

    const newPhoto = {
        id: photos.length + 1,
        urls: { regular: url},
        alt_description: description || "Custom Photos",
        links: { html: url}
    };
    photos.push(newPhoto);
    res.status(201).json(newPhoto);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});