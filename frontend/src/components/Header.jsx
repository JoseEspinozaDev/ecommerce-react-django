import { NavLink} from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();

  // Estilo condicional para el carrito
  const cartStyle =
    cart.length > 0
      ? {
          background: "linear-gradient(90deg, #08a78cff, #06bb67ff)", // degradado naranja-rosa
          borderRadius: "5px",
          color: "white",
        }
      : {};

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" style={({ isActive }) => ({ color: isActive ? "red" : "white" })} to="/">
          🛍️ MyShop
        </NavLink>
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
              <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? "red" : "white" })} to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? "red" : "white" })}  to="/productos">
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
                to="/contacto"
              >
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/carrito" style={cartStyle} >
                {cart.length === 0 ? "" : cart.length}🛒
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
