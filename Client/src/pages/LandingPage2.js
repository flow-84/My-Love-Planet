import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button as MuiButton } from '@mui/material';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage2.module.css';

const LandingPage2 = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const onRectangleOrderedListClick = useCallback(() => {
    navigate('/landing-page-3');
  }, [navigate]);

  const addCityToServer = useCallback(async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/addCity', { city });
      console.log(response.data.message);
    } catch (error) {
      console.error(`Fehler beim Hinzufügen der Stadt: ${error}`);
    }
  }, [city]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll('[data-animate-on-scroll]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            entry.target.classList.add(styles.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    scrollAnimElements.forEach((element) => observer.observe(element));

    return () => {
      scrollAnimElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className={styles.landingPage2}>
      {/* ... (restlicher Code bleibt unverändert) ... */}
      <MuiButton
        className={styles.landingPage2Inner}
        sx={{ width: 79 }}
        variant="contained"
        color="primary"
        onClick={addCityToServer}
      >
        Add
      </MuiButton>
      {/* ... (restlicher Code bleibt unverändert) ... */}
    </div>
  );
};

export default LandingPage2;
