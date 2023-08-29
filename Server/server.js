require('dotenv').config();  // Laden der Umgebungsvariablen

const express = require('express');
const cors = require('cors');
const path = require('path');
<<<<<<< Updated upstream
const apiRoutes = require('./routes/api');  // Importieren Sie die API-Routen nur einmal
=======
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
>>>>>>> Stashed changes

const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

<<<<<<< Updated upstream
// API Routes
app.use('/api', apiRoutes);  // Fügen Sie die API-Routen nur einmal hinzu

// Static File Handling for React
=======
// MongoDB Verbindung
mongoose.connect('mongodb+srv://nomaddb:NomadDB2023@nomaddb.8dzfpci.mongodb.net/?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// API-Routen
app.use('/api', apiRoutes);

// Statische Dateien für React
>>>>>>> Stashed changes
app.use(express.static(path.join(__dirname, '../Client/build')));

// Catch-All für React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/build', 'index.html'));
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
