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
  // const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
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
      <div className={styles.store_pickup_container}>
        <div className={styles.store_pickup_description}>
          We offer in-store pickup at the{" "}
          <a
            href="https://www.google.com/maps/place/2614+Bridge+St+%23223,+Victoria,+BC+V8T+4S9/@48.43654,-123.3755966,17z/data=!3m1!4b1!4m6!3m5!1s0x548f737c464fe329:0x3477ab392928fcf0!8m2!3d48.43654!4d-123.37349!16s%2Fg%2F11rq8htjwk?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <u>Salt Legacy shop</u>
          </a>
          ! <br /> <br />
          <b style={{ color: "#87ceeb" }}>Location:</b> <br />
          223-2614 Bridge Street, Victoria, BC
          <br />
          <br />
          <b style={{ color: "#87ceeb" }}>Hours of operation:</b> <br />
          Please be advised that the shop operates on an appointment-only basis.
          Since the shop is small and doesn't have regular hours, we kindly ask
          you to email ahead of time to schedule your visit. We look forward to
          assisting you!
        </div>
      </div>
      <div className={styles.products_container}>
        <div className={styles.description_container}>
          <p className={styles.description}>
            All of our products are made out of wetsuits from surfers and surf
            shops located all around Vancouver Island. <br />
            Rest assured, all of our wetsuits are properly sanitized and cleaned
            before being repurposed into Brew Suits and Change Mats!
            <br /> <br /> Enjoy <b>free shipping</b> on all orders over{" "}
            <b>$125</b>!
          </p>
        </div>
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
        <div className={styles.products_grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
