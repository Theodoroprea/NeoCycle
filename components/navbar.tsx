import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#">Products</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;
