import { Route, Routes } from "react-router-dom";
// import Navbar from "./component/Navbar";
import Cribs from "./pages/Cribs";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cribs />} />
        <Route
          path="/houses"
          element={
            <Category
              category="Houses"
              ban="/src/assets/images/housesBan.jpg"
            />
          }
        />

        <Route
          path="/furniture"
          element={
            <Category
              category="Furniture"
              ban="/src/assets/images/furnBan.jpg"
            />
          }
        />
        <Route
          path="/interior"
          element={
            <Category category="Interior" ban="/src/assets/images/intBan.jpg" />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cribs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
