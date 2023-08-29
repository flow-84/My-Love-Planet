// Importieren Sie alle erforderlichen Module
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import LandingPage2 from "./pages/LandingPage2";
import LandingPage3 from "./pages/LandingPage3";
import LandingPage4 from "./pages/LandingPage4";

function App() {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState({ name: '', lat: 0, lon: 0, notes: '', reminders: [] });
  const { pathname } = useLocation();

  // Erster useEffect für die Ortsverwaltung
  useEffect(() => {
    axios.get('http://localhost:8080/api/getLocations')
      .then(response => setLocations(response.data))
      .catch(error => console.error(error));
  }, []);

  // Zweiter useEffect für die Landing Pages
  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-4":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // Weitere Funktionen und Logik hier

  return (
    // Ihr JSX-Code hier
  );
}

export default App;
