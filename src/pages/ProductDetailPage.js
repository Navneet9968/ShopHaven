import NavBar from "../features/navbar/NavBar";
import ProductDetail from "../features/product/components/ProductDetails";

function ProductDetailPage() {
  return (
    <div>
      <NavBar>
        <ProductDetail />
      </NavBar>
    </div>
  );
}

export default ProductDetailPage;
