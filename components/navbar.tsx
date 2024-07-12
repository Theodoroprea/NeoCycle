import styles from "../styles/Navbar.module.scss";

interface NavbarProps {
  page: string;
}

const Navbar = (props: NavbarProps) => {
  const ConditionalNavbarComponent = () => {
    if (props.page === "home") {
      return (
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="/products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      );
    } else if (props.page === "products") {
      return (
        <nav className={styles.nav}>
          <a href="/">Home</a>
        </nav>
      );
    } else {
      return (
        <div>
          <h1>Page Not Found</h1>
          <p>We couldn't find the page you're looking for.</p>
        </div>
      );
    }
  };

  return (
    <div className={styles.navbar_container}>
      <ConditionalNavbarComponent />
    </div>
  );
};

export default Navbar;
