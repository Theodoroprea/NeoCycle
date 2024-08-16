import { Product } from "@/lib/utils/types/Product";
import styles from "../styles/ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src={props.product.images[0]}
          alt={props.product.name}
          className={styles.productImage}
        />
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{props.product.name}</h2>
        <p className={styles.productPrice} role="link">
          ${props.product.price?.toFixed(2)}
        </p>
        <p className={styles.productDescription}>{props.product.description}</p>
      </div>
    </div>
  );
}
