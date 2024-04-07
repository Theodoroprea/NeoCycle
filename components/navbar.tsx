import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <nav className={styles.nav}>
        <a href="#">About</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;
