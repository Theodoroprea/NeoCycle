import { use, useEffect, useState } from "react";
import styles from "../styles/Products.module.scss";
import ProductCard from "./productCard";
import getProducts from "@/pages/api/apiUtils";
import { Product } from "@/lib/utils/types/Product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        setFilteredProducts(products);
        console.log("Fetched products:", products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm !== "") {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  return (
    <>
      <div className={styles.search_input_container}>
        {/* <div className={styles.search_input_icon}>
          <button>Search</button>
        </div>
        <input
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}
      </div>
      <div className={styles.products_container}>
        <div className={styles.description_container}>
          <p className={styles.description}>
            All of our products are made from wetsuits from surfers and surf
            shops from all around Vancouver Island.
            <br /> <br /> Rest assured, all of the wetsuits are properly
            sanitized and cleaned before being repurposed into a Brew Suit and a
            Change Buddy!
          </p>
        </div>
        <div className={styles.products_grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
