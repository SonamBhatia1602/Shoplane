import HomePage from "./pages/Homepage";
import "./index.css";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/favorite" element={<FavoritePage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </Router>
  );
}

export default App;
