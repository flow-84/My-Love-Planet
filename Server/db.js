// Hier wird eine Verbindung zur MongoDB-Datenbank aufgebaut.

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my-loved-planet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
