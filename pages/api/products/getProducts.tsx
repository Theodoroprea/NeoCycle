import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await stripe.products.list();
    const prices = await stripe.prices.list();

    const productData = products.data.map((product) => {
      const price = prices.data.find((p) => p.product === product.id);
      return {
        id: product.id,
        priceId: product.default_price,
        name: product.name,
        description: product.description,
        images: product.images,
        price: price ? price.unit_amount! / 100 : null, // Convert from cents to dollars
      };
    });

    res.status(200).json(productData);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
