import Header from "./components/Header";
import ProductsPage from "./pages/productsPage";
import HomePage from "./pages/HomePage";
import CategorySection from "./components/CategorySection";
import { cartProvider } from "./context/cartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <cartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/CategorySection" element={<CategorySection />} />
        </Routes>
        <ProductsPage />
      </Router>
    </cartProvider>
  );
}

export default App;
