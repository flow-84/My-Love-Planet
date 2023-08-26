//Der Controller enthält die eigentliche 
//Logik für die API-Endpunkte. Hier wird die addPlace-Funktion verwendet, 
//um einen neuen Ort in der Datenbank zu speichern.

const Place = require('../models/Place'); // Importieren des Datenbank-Modells

exports.addPlace = async (req, res) => {
  try {
    const newPlace = new Place(req.body);
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Weitere Controller-Funktionen für Abruf, Aktualisierung und Löschung von Orten...
