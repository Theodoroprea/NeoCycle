import { useEffect, useState, useContext } from "react";
import styles from "../styles/Products.module.scss";
import ProductCard from "./productCard";
import getProducts from "@/pages/api/apiUtils";
import { Product } from "@/lib/utils/types/Product";
import { Button } from "@mui/material";
import { CartContext } from "@/context/cartContext";
import CartModal from "./cartModal";

export default function Products() {
  const cart = useContext(CartContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  // const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const productsCount = cart.products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        // setFilteredProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   if (searchTerm !== "") {
  //     const results = products.filter((product) =>
  //       product.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setFilteredProducts(results);
  //   } else {
  //     setFilteredProducts(products);
  //   }
  // }, [searchTerm, products]);

  return (
    <>
      {/* <div className={styles.search_input_container}> */}
      {/* <div className={styles.search_input_icon}>
          <Button>Search</Button>
        </div>
        <input
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}
      {/* </div> */}

      <CartModal
        showModal={showModal}
        handleClose={handleClose}
        productsCount={productsCount}
      />
      <div className={styles.products_container}>
        <div className={styles.btnContainer}>
          <Button
            size="large"
            variant="contained"
            sx={{
              "&:hover": { backgroundColor: "#51B8E1" },
              backgroundColor: "#87ceeb",
              color: "black",
              boxShadow: "none",
            }}
            data-testid="cartBtn"
            onClick={handleShow}
          >
            Cart: {productsCount} items
          </Button>
        </div>
        <div className={styles.description_container}>
          <p className={styles.description}>
            All of our products are made out of wetsuits from surfers and surf
            shops located all around Vancouver Island.
            <br /> <br /> Rest assured, all of the wetsuits are properly
            sanitized and cleaned before being repurposed into Brew Suits and
            Change Mats!
          </p>
        </div>
        <div className={styles.products_grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
