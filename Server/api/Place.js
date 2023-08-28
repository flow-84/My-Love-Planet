// Das Mongoose-Schema definiert die Struktur
// eines Orts in der Datenbank. Hier werden Titel,
// Koordinaten, Details, Bilder, Benutzer-ID und andere Felder festgelegt.

const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  title: String,
  coordinates: { type: [Number], required: true },
  details: String,
  images: [String],
  userId: String,
  // ... andere Felder ...
});

module.exports = mongoose.model('Place', placeSchema);
