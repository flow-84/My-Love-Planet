import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import BottomFooter from "../components/BottomFooter";
import { useNavigate } from "react-router-dom";
import StyleFilledStateDefaultS from "../components/StyleFilledStateDefaultS";
import RichTextField from "../components/RichTextField";
import TypeText from "../components/TypeText";
import SectionCard from "../components/SectionCard";
import styles from "./AppPage.module.css";

const AppPage = () => {
  // Zustandsvariablen
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [markers, setMarkers] = useState([]); // Für die Marker auf der Karte

  // React Router Navigate-Funktion
  const navigate = useNavigate();

  // Navigationsfunktion für den Home-Button
  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Asynchrone Funktion zum Durchführen der Suche
  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?q=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Fehler beim Abrufen der Daten:", error);
    }
  };

  // Funktion zum Abfangen der Enter-Taste
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Marker-Click-Handler
  const handleMarkerClick = (marker) => {
    console.log("Ausgewählter Marker:", marker);
    // Weitere Aktionen können hier durchgeführt werden
  };

  // Daten beim Laden der Komponente abrufen
  useEffect(() => {
    axios.get('/api/locations') // Ändern Sie die URL entsprechend Ihrem API-Endpunkt
      .then(response => {
        setMarkers(response.data);
      })
      .catch(error => {
        console.error("Fehler beim Abrufen der Marker-Daten:", error);
      });
  }, []);

  return (
    <div className={styles.appPage}>
      {/* Vorhandener Code */}
      <div className={styles.welcheStadtHastDuSchonBesParent}>
        <div className={styles.welcheStadtHast}>
          Welche Stadt hast du schon besucht?
        </div>
        {/* Suchfeld */}
        <TypeText
          typeTextPosition="absolute"
          typeTextWidth="343px"
          typeTextBorder="none"
          typeTextFontFamily="Inter"
          typeTextFontSize="16px"
          typeTextTop="120px"
          typeTextLeft="calc(50% - 175.5px)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        {/* Button zum Starten der Suche */}
        <button onClick={handleSearch}>Suche starten</button>
      </div>
      {/* Liste der Suchergebnisse */}
      <div>
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result.name}</li>
          ))}
        </ul>
      </div>
      {/* OpenStreetMap-Container */}
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marker hinzufügen */}
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lon]} onClick={() => handleMarkerClick(marker)}>
            <Popup>
              {marker.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* Vorhandener Code */}
    </div>
  );
};

export default AppPage;
