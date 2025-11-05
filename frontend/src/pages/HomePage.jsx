import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-light text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bold">Bienvenido a MyShop 🛒</h1>
        <p className="lead text-muted">
          Los mejores productos al mejor precio — directo a tu hogar.
        </p>

        <NavLink className="btn btn-primary btn-lg mt-3" to="/products">
          Ver productos
        </NavLink>
         
      </div>
    </div>
  );
}

export default HomePage;
