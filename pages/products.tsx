import Footer from "@/components/footer";
import Parallax from "@/components/parallax";
import Products from "@/components/productList";

export default function ProductsPage() {
  return (
    <div>
      <Parallax page={"products"} />
      <Products />
      <Footer />
    </div>
  );
}
