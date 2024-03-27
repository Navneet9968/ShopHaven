import NavBar from "../features/navbar/NavBar";
import ProductList from "../features/productList/productList";
function Home() {
  return (
    <div>
      <NavBar >
        <ProductList />
      </NavBar>
    </div>
  );
}

export default Home;
