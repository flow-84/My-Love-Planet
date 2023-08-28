import { useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage2.module.css";
const LandingPage2 = () => {
  const navigate = useNavigate();

  const onRectangleOrderedListClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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

  const onLissabonStadtnameStadtnameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.landingPage2}>
      <div className={styles.landingPage2Child} />
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <div className={styles.nav}>
              <div className={styles.frame3}>
                <div className={styles.home}>Home</div>
                <div className={styles.about}>About</div>
                <div className={styles.contact}>Contact</div>
              </div>
            </div>
            <div className={styles.logolandie}>
              <div className={styles.landie}>NomadNexus</div>
            </div>
          </div>
          <div className={styles.frame4}>
            <img
              className={styles.dreamshaperV7WhiteBackgrounIcon}
              alt=""
              src="/dreamshaper-v7-white-background-travel-comic-look-earth-0-1@2x.png"
            />
            <div className={styles.title}>
              <p className={styles.erweckeDeineAbenteuer}>
                "Erwecke deine Abenteuer zum Leben: Die Reisehelden-Chroniken –
                Orte, Erinnerungen und Geschichten"
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
      <div className={styles.frame5}>
        <div className={styles.footer}>
          <div className={styles.frame6}>
            <div className={styles.div}>©2023 Yourcompany</div>
          </div>
          <div className={styles.frame7}>
            <div className={styles.rectangle} />
            <div className={styles.frame8}>
              <div className={styles.frame9}>
                <div className={styles.frame10}>
                  <div className={styles.home1}>Home</div>
                  <div className={styles.home1}>About</div>
                  <div className={styles.home1}>Contact</div>
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
        <div className={styles.logolandie1} />
      </div>
      <div className={styles.welcheStadtHast}>
        Welche Stadt hast du schon besucht?
      </div>
      <Form.Group className={styles.wrapper}>
        <Form.Control type="text" placeholder="Stadt hinzufügen..." />
      </Form.Group>
      <ol
        className={styles.landingPage2Item}
        onClick={onRectangleOrderedListClick}
      />
      <ol className={styles.landingPage2Inner} data-animate-on-scroll />
      <div className={styles.openstreetmap}>Openstreetmap</div>
      <div className={styles.besuchteStdte}>Besuchte Städte</div>
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

export default LandingPage2;
