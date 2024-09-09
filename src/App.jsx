import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Cribs from "./pages/Cribs";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Cribs />} />
        <Route path="/houses" element={<Category category="houses" />} />

        <Route path="/exterior" element={<Category category="exterior" />} />
        <Route path="/interior" element={<Category category="interior" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cribs />} />
      </Routes>
    </div>
  );
}

export default App;
