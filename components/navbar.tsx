import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

interface NavbarProps {
  page: string;
}

const Navbar = (props: NavbarProps) => {
  const ConditionalNavbarComponent = () => {
    if (props.page === "home") {
      return (
        <div className={styles.navbar_container_home}>
          <nav className={styles.nav}>
            <a href="#about">About</a>
            <Link href="/products">Products</Link>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      );
    } else if (props.page === "products") {
      return (
        <div className={styles.navbar_container_products}>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
          </nav>
        </div>
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

  return <ConditionalNavbarComponent />;
};

export default Navbar;
