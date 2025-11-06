import Header from "./components/Header";
import ProductsPage from "./pages/productsPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/cartPage";
import CategorySection from "./components/CategorySection";
import NotFoundPage from "./components/NotFoundPage";
import ContactForm from "./components/ContactForm";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/CategorySection" element={<CategorySection />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/contacto" element={<ContactForm/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
