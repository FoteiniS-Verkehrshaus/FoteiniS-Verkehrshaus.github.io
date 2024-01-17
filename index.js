const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const imageDataPath = 'imageData.json';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const slot = req.params.id;
    cb(null, slot + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Read imageData from file
let imageData = {};
fs.readFile(imageDataPath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    imageData = JSON.parse(data);
});

// File upload endpoint
app.post('/upload/:id', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const slotKey = req.params.id;
  const newFileExtension = path.extname(req.file.originalname);
  const newFilePath = `/uploads/${slotKey}${newFileExtension}`;

  // Function to update imageData and save it
  const updateImageData = () => {
    imageData[slotKey] = {
      filePath: newFilePath,
      lastUploaded: new Date().toISOString()
    };

    fs.writeFile(imageDataPath, JSON.stringify(imageData, null, 2), 'utf8', err => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).send('Error saving image data');
      }
      res.json(imageData[slotKey]);
    });
  };

  // If an old file exists, delete it
  const oldFilePath = imageData[slotKey]?.filePath ? `uploads${imageData[slotKey].filePath}` : null;
  if (oldFilePath) {
    fs.unlink(oldFilePath, (err) => {
      if (err && err.code !== 'ENOENT') { // 'ENOENT' means no such file, which is fine
        console.error("Error deleting old file:", err);
        return res.status(500).send('Error deleting old file');
      }
      updateImageData();
    });
  } else {
    updateImageData();
  }
});

app.get('/imageData', (req, res) => {
  res.json(imageData);
});

app.listen(port, () => console.log(`CMS running on http://localhost:${port}`));      