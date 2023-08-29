const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');  // Importieren Sie die API-Routen nur einmal

const app = express();
const port = 8080;

// CORS Middleware
app.use(cors());

// Body Parser Middleware (für POST-Anfragen)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
