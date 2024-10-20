import { CartContext } from "@/context/cartContext";
import { Button } from "@mui/material";
import { useContext } from "react";

interface cartProductsProps {
  id: string;
  quantity: number;
  name: string;
  price: number;
}

export default function CartProduct(props: cartProductsProps) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const name = props.name;
  const price = props.price;

  return (
    <>
      <h3>{name}</h3>
      <p>{quantity} items</p>
      <p>${(quantity * price).toFixed(2)}</p>
      <Button onClick={() => cart.deleteFromCart(id)}>Remove</Button>
      <hr></hr>
    </>
  );
}
