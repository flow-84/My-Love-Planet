const express = require('express');
const router = express.Router();

router.post('/addCity', (req, res) => {
  const city = req.body.city;
  // Hier können Sie eine Datenbankabfrage oder API-Aufruf durchführen, um die Stadtinformationen zu erhalten
  res.json({ message: `Stadt ${city} hinzugefügt.` });
});

module.exports = router;
