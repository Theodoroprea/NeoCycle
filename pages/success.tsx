import Footer from "@/components/footer";

import styles from "../styles/Success.module.scss";
import Navbar from "@/components/navbar";

export default function SuccessPage() {
  return (
    <div className={styles.page_background}>
      <div className={styles.title_container}>
        <div className={styles.title}>
          <h1 className={styles.products_title}>Thank yOu</h1>
          <h1 className={styles.products_subtitle}>For your purchase</h1>
        </div>
        <Navbar page={"products"} />
      </div>
      <div className={styles.success_paragraph_container}>
        <div className={styles.success_paragraph}>
          <p>
            Thank you for your purchase!
            <br />
            Your order is being processed and will be shipped shortly!
          </p>
          <br />
          <p>
            Make sure to keep an eye out on your mailbox for a confirmation
            email. <br /> If you have any questions or concerns, feel free to
            contact us!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
