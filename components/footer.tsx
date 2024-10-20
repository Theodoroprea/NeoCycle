import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.waves}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
        <div className={`${styles.wave} ${styles.wave4}`}></div>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.socialIcons}>
          <li>
            <a href="https://www.instagram.com/neocycl3/">
              <InstagramIcon fontSize="large" style={{ color: "#ffc145" }} />
            </a>
          </li>
          <li>
            <a href="">
              <FacebookIcon fontSize="large" style={{ color: "#ffc145" }} />
            </a>
          </li>
        </div>
        <div className={styles.footerBottom}>
          <p>
            {/* Copyright &copy;2024 {" | "}*/}Designed by{" "}
            <span className={styles.designer}>Theodor</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
