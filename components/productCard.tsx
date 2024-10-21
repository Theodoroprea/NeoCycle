import { Product } from "@/lib/utils/types/Product";
import styles from "../styles/ProductCard.module.scss";
import { Button, IconButton, Stack } from "@mui/material";

import { CartContext } from "@/context/cartContext";
import { useContext } from "react";
import { AddCircle, Delete, RemoveCircle } from "@mui/icons-material";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(props.product.id);

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
      <div className={styles.btnContainer}>
        <Button
          variant="contained"
          sx={{
            "&:hover": { backgroundColor: "#51B8E1" },
            backgroundColor: "#87ceeb",
            color: "black",
          }}
          data-testid="addToCartBtn"
          onClick={() =>
            cart.addProductToCart(
              props.product.id,
              props.product.name,
              props.product.price
            )
          }
        >
          Add to cart
        </Button>
        {productQuantity > 0 ? (
          <div className={styles.cartBtns}>
            <Stack
              direction="row"
              spacing={2}
              style={{ alignSelf: "center", alignItems: "center" }}
            >
              <IconButton
                onClick={() => cart.removeOneFromCart(props.product.id)}
              >
                <RemoveCircle
                  style={{
                    color: "#ffc145",
                  }}
                ></RemoveCircle>
              </IconButton>
              <p>{productQuantity}</p>
              <IconButton
                onClick={() =>
                  cart.addProductToCart(
                    props.product.id,
                    props.product.name,
                    props.product.price
                  )
                }
              >
                <AddCircle
                  style={{
                    color: "#ffc145",
                  }}
                ></AddCircle>
              </IconButton>
            </Stack>
            <IconButton onClick={() => cart.deleteFromCart(props.product.id)}>
              <Delete
                style={{
                  color: "#d9534f",
                }}
              ></Delete>
            </IconButton>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
