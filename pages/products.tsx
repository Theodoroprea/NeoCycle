import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Products from "@/components/productList";

import styles from "../styles/Products.module.scss";

export default function ProductsPage() {
  return (
    <div className={styles.page_background}>
      <div className={styles.page_container}>
        <div className={styles.title}>
          <h1 className={styles.products_title}>PrOducts</h1>
        </div>
        <Navbar page={"products"} />
      </div>
      <Products />
      <Footer />
    </div>
  );
}
