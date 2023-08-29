const express = require('express');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const router = express.Router();

const SECRET_KEY = process.env.JWT_SECRET;  // Secret Key aus der Umgebungsvariablen lesen

// Schema & Model für Location
const LocationSchema = new mongoose.Schema({
  name: String,
  description: String,
  photo: String
});

const Location = mongoose.model('Location', LocationSchema);

// Multer Konfiguration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
});

// Authentifizierungsmiddleware
const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, SECRET_KEY);  // Verwendung des Secret Keys aus der Umgebungsvariablen
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

// Such-Endpunkt mit Pagination
router.get('/search', async (req, res) => {
  const query = req.query.q;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const results = await Location.find({ name: new RegExp(query, 'i') })
                                .skip((page - 1) * limit)
                                .limit(limit);
  res.json(results);
});

// Endpunkt zum Hinzufügen einer Stadt
router.post('/add', authenticate, upload.single('photo'), async (req, res) => {
  try {
    const { name, description } = req.body;
    const photo = req.file ? req.file.filename : null;

    const newLocation = new Location({
      name,
      description,
      photo
    });

    await newLocation.save();
    res.json({ message: 'Location added successfully' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
