import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3 text-secondary">Página no encontrada</h2>
      <p className="text-muted mb-4 text-center px-3">
        Lo sentimos 😢, la página que buscas no existe o fue movida.
      </p>
      <button className="btn btn-primary btn-lg" onClick={() => navigate("/")}>
        Volver al inicio
      </button>
    </div>
  );
}
