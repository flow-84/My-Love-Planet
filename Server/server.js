const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');  // Importieren Sie die API-Routen nur einmal

const app = express();
const port = 8080;

// CORS Middleware
app.use(cors());

// Body Parser Middleware (für POST-Anfragen)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB Verbindung
mongoose.connect('mongodb://localhost:27017/locationDB', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Schema & Model
const LocationSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lon: Number,
  notes: String,
  dateVisited: Date,
  photos: [String], // URLs der Fotos
  linkedLocations: [String], // IDs der verknüpften Orte
  reminders: [{ type: Date, note: String }]
});

const Location = mongoose.model('Location', LocationSchema);

// API Routes
app.use('/api', apiRoutes);  // Fügen Sie die API-Routen nur einmal hinzu

// Static File Handling for React
app.use(express.static(path.join(__dirname, '../Client/build')));

// Catch-All for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/build', 'index.html'));
});

// Start Server
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
