import { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

// Function to calculate total amount
const calculateTotalAmount = async (lineItems: any) => {
  let totalAmount = 0;

  for (const item of lineItems) {
    // Fetch price data from Stripe using the price ID
    const priceData = await stripe.prices.retrieve(item.price);

    // Add item total (unit amount * quantity) to totalAmount
    totalAmount += priceData.unit_amount! * item.quantity;
  }

  return totalAmount;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let lineItems: any = [];
  req.body.items.forEach((item: any) => {
    lineItems.push({
      price: item.priceId,
      quantity: item.quantity,
    });
  });

  const totalAmount = await calculateTotalAmount(lineItems);

  // If it's above 125 CAD, we offer free shipping
  const shippingOptions =
    totalAmount >= 12500 // 125 CAD in cents
      ? [{ shipping_rate: "shr_1QJ3MlRw1tlPt1Zhjx4QFo0V" }] // FREE SHIPPING
      : [
          {
            shipping_rate: "shr_1QIxjdRw1tlPt1ZhAmm0zDnS",
          },
          {
            shipping_rate: "shr_1QIxTqRw1tlPt1ZhnO6Xeepu",
          },
          {
            shipping_rate: "shr_1QIxjBRw1tlPt1ZhGjolusmB",
          },
        ];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    shipping_options: shippingOptions,
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/products`,
    automatic_tax: { enabled: true },
    shipping_address_collection: { allowed_countries: ["CA"] },
  });
  res.status(200).json({ sessionId: session.id });
};
