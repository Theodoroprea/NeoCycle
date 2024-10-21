import { CartContext } from "@/context/cartContext";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default async function handleCheckoutClick(cartProducts: any) {
  const { sessionId } = await fetch("/api/checkout/session", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ items: cartProducts }),
  }).then((res) => res.json());
  const stripe = await stripePromise;
  const { error } = await stripe!.redirectToCheckout({
    sessionId,
  });
}
