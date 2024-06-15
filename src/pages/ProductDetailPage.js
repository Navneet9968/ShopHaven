import Footer from "../features/common/Footer";
import NavBar from "../features/navbar/NavBar";
import ProductDetail from "../features/product/components/ProductDetails";

function ProductDetailPage() {
  return (
    <div>
      <NavBar>
        <ProductDetail />
      </NavBar>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
