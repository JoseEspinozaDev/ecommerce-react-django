import Header from "./components/Header";
import ProductsPage from "./pages/productsPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <ProductsPage />
    </Router>
  );
}

export default App;
