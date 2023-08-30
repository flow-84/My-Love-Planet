import { useMemo } from "react";
import styles from "./BottomFooter.module.css";
const BottomFooter = ({ frameTop, frameBoxShadow }) => {
  const footerStyle = useMemo(() => {
    return {
      top: frameTop,
      boxShadow: frameBoxShadow,
    };
  }, [frameTop, frameBoxShadow]);

  return (
    <div className={styles.footer} style={footerStyle}>
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
            <img className={styles.frameIcon} alt="" src="/frame1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.logolandie} />
    </div>
  );
};

export default BottomFooter;
