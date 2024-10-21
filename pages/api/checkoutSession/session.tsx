import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let lineItems: any = [];
  req.body.items.forEach((item: any) => {
    lineItems.push({
      price: item.priceId,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/products`,
    automatic_tax: { enabled: true },
    shipping_address_collection: { allowed_countries: ["CA"] },
  });
  res.status(200).json({ sessionId: session.id });
};
