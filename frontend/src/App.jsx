import Header from "./components/Header";
import ProductsPage from "./pages/productsPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/cartPage";
import CategorySection from "./components/CategorySection";
import NotFoundPage from "./components/NotFoundPage";
import ContactForm from "./components/ContactForm";
import ProductDetail from "./components/ProductDetail";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import logout from "./components/Logout";
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Página pública sin Header */}
            <Route path="/login" element={<Login />} />

            {/* Todas las páginas protegidas con Header */}
            <Route
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<HomePage />} />
              <Route path="/productos" element={<ProductsPage />} />
              <Route path="/CategorySection" element={<CategorySection />} />
              <Route path="/carrito" element={<CartPage />} />
              <Route path="/contacto" element={<ContactForm />} />
              <Route path="/productos/:id" element={<ProductDetail />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
