import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.frame}>
          <div className={styles.rectangle} />
          <div className={styles.frame1}>
            <div className={styles.frame2}>
              <div className={styles.frame3}>
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
        <div className={styles.frame4}>
          <div className={styles.div}>©2023 Yourcompany</div>
        </div>
      </div>
      <div className={styles.logolandie} />
    </div>
  );
};

export default Footer;
