import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
function Header() {

  //destructurando el contexto
  const {cart} = useCart()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🛍️ MyShop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link" to="/carrito">{cart.length === 0 ? '': cart.length}🛒</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
