import NavBar from "../features/navbar/NavBar";
import ProductDetail from "../features/productList/components/ProductDetails";

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
