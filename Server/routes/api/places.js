//Dieser Router definiert die API-Endpunkte 
//für die Ortsverwaltung. Der POST-Endpunkt 
//ermöglicht das Hinzufügen neuer Orte.

const express = require('express');
const Place = require('../api/Place'); // Importieren des Datenbank-Modells

const router = express.Router();

router.post('/add', async (req, res) => {
  // Erfassung eines neuen Orts
  try {
    const newPlace = new Place(req.body);
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Weitere Endpunkte für Abruf, Aktualisierung und Löschung von Orten...

module.exports = router;
