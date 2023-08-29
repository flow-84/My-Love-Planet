import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import StyleFilledStateDefaultS from "../components/StyleFilledStateDefaultS";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/app-page");
  }, [navigate]);

  return (
    <div className={styles.landingPage}>
      <div className={styles.dreamshaperV7WhiteBackgrounParent}>
        <img
          className={styles.dreamshaperV7WhiteBackgrounIcon}
          alt=""
          src="/dreamshaper-v7-white-background-travel-comic-look-earth-0-1@2x.png"
        />
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            <p className={styles.erweckeDeineAbenteuer}>
              "Erwecke deine Abenteuer zum Leben: Die Reisehelden-Chroniken –
              Orte, Erinnerungen und Geschichten"
            </p>
            <p className={styles.erweckeDeineAbenteuer}>&nbsp;</p>
            <p className={styles.erweckeDeineAbenteuer}>&nbsp;</p>
            <p className={styles.dieKartographieDeiner}>
              "Die Kartographie deiner Abenteuer: Orte, Erinnerungen, unendliche
              Möglichkeiten"
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <div className={styles.frameParent}>
        <div className={styles.frame}>
          <div className={styles.home}>Home</div>
          <div className={styles.home}>About</div>
          <div className={styles.home}>Contact</div>
        </div>
        <div className={styles.logoname}>NomadNexus</div>
      </div>
      <StyleFilledStateDefaultS
        label="Los geht's"
        styleFilledStateDefaultSPosition="absolute"
        styleFilledStateDefaultSWidth="300px"
        styleFilledStateDefaultSHeight="80px"
        styleFilledStateDefaultSOverflow="unset"
        styleFilledStateDefaultSMargin="0 !important"
        styleFilledStateDefaultSTop="617px"
        styleFilledStateDefaultSLeft="calc(50% + 67px)"
        styleFilledStateDefaultSBorderRadius="12px"
        styleFilledStateDefaultSCursor="pointer"
        styleFilledStateDefaultSZIndex="3"
        styleFilledStateDefaultSBackgroundColor="#7f878f"
        onButtonContainerClick={onButtonContainerClick}
      />
    </div>
  );
};

export default LandingPage;
