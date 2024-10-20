import { Product } from "@/lib/utils/types/Product";

export default async function getProducts() {
  const response = await fetch("/api/products/getProducts", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data");
  }
  const products: Product[] = await response.json();
  return products;
}
