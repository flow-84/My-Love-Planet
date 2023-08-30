import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  // Zustandsvariablen für Orte, neuen Ort und Erinnerungen
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState({ name: '', lat: 0, lon: 0, notes: '', photos: [], linkedLocations: [], reminders: [] });
  const [newReminder, setNewReminder] = useState({ date: '', note: '' });

  // Daten beim Laden der Komponente abrufen
  useEffect(() => {
    axios.get('http://localhost:8080/api/getLocations')
      .then(response => setLocations(response.data))
      .catch(error => console.error(error));
  }, []);

  // Funktion zum Hinzufügen eines neuen Ortes
  const addLocation = () => {
    axios.post('http://localhost:8080/api/addLocation', newLocation)
      .then(response => setLocations([...locations, response.data]))
      .catch(error => console.error(error));
  };

  // Funktion zum Hinzufügen einer Erinnerung
  const addReminder = () => {
    setNewLocation({ ...newLocation, reminders: [...newLocation.reminders, newReminder] });
  };

  return (
    <div>
      <h1>Ortsverwaltung</h1>
      {/* Formular zur Eingabe neuer Orte */}
      <input type="text" placeholder="Name" onChange={e => setNewLocation({ ...newLocation, name: e.target.value })} />
      <input type="number" placeholder="Latitude" onChange={e => setNewLocation({ ...newLocation, lat: parseFloat(e.target.value) })} />
      <input type="number" placeholder="Longitude" onChange={e => setNewLocation({ ...newLocation, lon: parseFloat(e.target.value) })} />
      <input type="text" placeholder="Notizen" onChange={e => setNewLocation({ ...newLocation, notes: e.target.value })} />
      <button onClick={addLocation}>Ort hinzufügen</button>

      {/* Eingabefeld für Erinnerungen */}
      <input type="date" placeholder="Erinnerungsdatum" onChange={e => setNewReminder({ ...newReminder, date: e.target.value })} />
      <input type="text" placeholder="Erinnerungsnotiz" onChange={e => setNewReminder({ ...newReminder, note: e.target.value })} />
      <button onClick={addReminder}>Erinnerung hinzufügen</button>

      {/* Kartenansicht mit OpenStreetMap */}
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Marker für jeden Ort aus dem Zustand */}
        {locations.map(location => (
          <Marker key={location._id} position={[location.lat, location.lon]}>
            <Popup>
              {location.name}<br />{location.notes}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
