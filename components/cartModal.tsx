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
      <DialogContent dividers>
        <DialogContentText className={styles.modalText}>
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
              >
                Proceed To checkout
              </Button>
            </>
          ) : (
            <h3> There are no items in your cart!</h3>
          )}
        </DialogContentText>
      </DialogContent>
    </CustomDialog>
  );
}
