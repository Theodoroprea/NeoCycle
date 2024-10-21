import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import CartProduct from "./cartProduct";
import styles from "../styles/CartModal.module.scss";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    backgroundColor: "#FAF0E6",
    borderRadius: "10px",

    "@media (max-width: 425px)": {
      // Small screens (xs)
      width: "90%",
    },
    "@media (min-width: 426px) and (max-width: 768px)": {
      // Medium screens (sm)
      width: "70%",
    },
    "@media (min-width: 769px)": {
      // Medium to large screens (md)
      width: "60%",
    },
  },
}));

interface cartModalProps {
  showModal: boolean;
  handleClose: () => void;
  productsCount: number;
}

export default function CartModal(props: cartModalProps) {
  const cart = useContext(CartContext);

  const handleCheckoutClick = async () => {
    try {
      const { sessionId } = await fetch("/api/checkoutSession/session", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ items: cart.products }),
      }).then((res) => res.json());

      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error("Stripe.js failed to load.");
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error("Stripe checkout error:", error);
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <CustomDialog open={props.showModal} onClose={props.handleClose}>
      <DialogTitle className={styles.title}>{"Shopping Cart"}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={props.handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers className={styles.modalText}>
        {props.productsCount > 0 ? (
          <>
            {cart.products.map((currentProduct, idx) => (
              <CartProduct
                key={idx}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
                name={currentProduct.name}
                price={currentProduct.price}
              />
            ))}
            <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>

            <Button
              size="large"
              variant="contained"
              sx={{
                "&:hover": { backgroundColor: "#47A0FF" },
                backgroundColor: "#007bff",
                color: "#FAF0E6",
                boxShadow: "none",
              }}
              onClick={handleCheckoutClick}
            >
              Proceed To checkout
            </Button>
          </>
        ) : (
          <DialogContentText>
            There are no items in your cart!
          </DialogContentText>
        )}
      </DialogContent>
    </CustomDialog>
  );
}
