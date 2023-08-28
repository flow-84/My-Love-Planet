import { useCallback, useEffect } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button as MuiButton } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage2.module.css";

const LandingPage2 = () => {
  const navigate = useNavigate();

  const onRectangleOrderedListClick = useCallback(() => {
    navigate("/landing-page-3");
  }, [navigate]);

  const addCity = async (city) => {
    try {
      const response = await axios.post('http://localhost:8080/api/addCity', { city });
      console.log(response.data.message);
    } catch (error) {
      console.error('Fehler beim Hinzufügen der Stadt:', error);
    }
  };

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.landingPage2}>
      <div className={styles.landingPage2Child} />
      <ol className={styles.landingPage2Item} onClick={onRectangleOrderedListClick} />
      <div className={styles.footer}>
        <div className={styles.footer1}>
          <div className={styles.frame}>
            <div className={styles.div}>©2023 Yourcompany</div>
          </div>
          <div className={styles.frame1}>
            <div className={styles.rectangle} />
            <div className={styles.frame2}>
              <div className={styles.frame3}>
                <div className={styles.frame4}>
                  <div className={styles.home}>Home</div>
                  <div className={styles.home}>About</div>
                  <div className={styles.home}>Contact</div>
                </div>
                <img className={styles.iconsocialinstagramCopy4} alt="" src="/iconsocialinstagram-copy-4.svg" />
              </div>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
          </div>
        </div>
        <div className={styles.logolandie} />
      </div>
      <div className={styles.welcheStadtHast}>
        Welche Stadt hast du schon besucht?
      </div>
      <MuiButton
        className={styles.landingPage2Inner}
        sx={{ width: 79 }}
        variant="contained"
        color="primary"
        onClick={() => addCity('Berlin')}
      >
        Add
      </MuiButton>
      <Form.Group className={styles.wrapper}>
        <Form.Control type="text" placeholder="Stadt hinzufügen..." />
      </Form.Group>
      <div className={styles.besuchteStdte}>Besuchte Städte</div>
      <div className={styles.header}>
        <div className={styles.frame5}>
          <div className={styles.frame6}>
            <div className={styles.nav}>
              <div className={styles.frame7}>
                <div className={styles.home1}>Home</div>
                <div className={styles.about1}>About</div>
                <div className={styles.contact1}>Contact</div>
              </div>
            </div>
            <div className={styles.logolandie1}>
              <div className={styles.landie}>NomadNexus</div>
            </div>
          </div>
          <div className={styles.frame8}>
            <img className={styles.dreamshaperV7WhiteBackgrounIcon} alt="" src="/dreamshaper-v7-white-background-travel-comic-look-earth-0-1@2x.png" />
            <div className={styles.title}>
              <p className={styles.erweckeDeineAbenteuer}>
                "Erwecke deine Abenteuer zum Leben: Die Reisehelden-Chroniken – Orte, Erinnerungen und Geschichten"
              </p>
              <p className={styles.dieKartographieDeiner}>
                "Die Kartographie deiner Abenteuer: Orte, Erinnerungen, unendliche Möglichkeiten"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lissabonStadtname}>
        <ul className={styles.lissabonStadtname1}>
          <li className={styles.lissabon}>Lissabon</li>
          <li className={styles.lissabon}>Stadtname</li>
        </ul>
      </div>
      <ol className={styles.rectangleOl} data-animate-on-scroll />
    </div>
  );
};

export default LandingPage2;
