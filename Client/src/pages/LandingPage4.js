import { useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage4.module.css";
const LandingPage4 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
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

  const onRectangleOrderedList1Click = useCallback(() => {
    navigate("/landing-page-3");
  }, [navigate]);

  const onLissabonStadtnameStadtnameClick = useCallback(() => {
    navigate("/landing-page-3");
  }, [navigate]);

  return (
    <div className={styles.landingPage4}>
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
                <img
                  className={styles.iconsocialinstagramCopy4}
                  alt=""
                  src="/iconsocialinstagram-copy-4.svg"
                />
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
      <Form.Group className={styles.wrapper}>
        <Form.Control type="text" placeholder="Stadt hinzufügen..." />
      </Form.Group>
      <ol className={styles.landingPage4Child} data-animate-on-scroll />
      <div className={styles.openstreetmap}>Openstreetmap</div>
      <div className={styles.besuchteStdte}>Besuchte Städte</div>
      <ol
        className={styles.landingPage4Item}
        onClick={onRectangleOrderedList1Click}
      />
      <div className={styles.landingPage4Inner} />
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
            <img
              className={styles.dreamshaperV7WhiteBackgrounIcon}
              alt=""
              src="/dreamshaper-v7-white-background-travel-comic-look-earth-0-1@2x.png"
            />
            <div className={styles.frame9}>
              <div className={styles.title}>
                <p className={styles.erweckeDeineAbenteuer}>
                  "Erwecke deine Abenteuer zum Leben: Die Reisehelden-Chroniken
                  – Orte, Erinnerungen und Geschichten"
                </p>
                <p className={styles.erweckeDeineAbenteuer}>&nbsp;</p>
                <p className={styles.erweckeDeineAbenteuer}>&nbsp;</p>
                <p className={styles.dieKartographieDeiner}>
                  "Die Kartographie deiner Abenteuer: Orte, Erinnerungen,
                  unendliche Möglichkeiten"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.lissabonStadtnameStadtnameContainer}
        onClick={onLissabonStadtnameStadtnameClick}
      >
        <ul className={styles.lissabonStadtnameStadtnameS}>
          <li className={styles.lissabon}>Lissabon</li>
          <li className={styles.lissabon}>Stadtname</li>
          <li className={styles.lissabon}>Stadtname</li>
          <li className={styles.lissabon}>Stadtname</li>
          <li className={styles.lissabon}>Stadtname</li>
          <li className={styles.lissabon}>Stadtname</li>
          <li className={styles.lissabon}>Stadtname</li>
          <li className={styles.lissabon}>Stadtname</li>
          <li className={styles.lissabon}>Stadtname</li>
          <li className={styles.lissabon}>Stadtname</li>
          <li className={styles.lissabon}>Stadtname</li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage4;
