import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login } from "../api/auth";
import { Toaster,toast } from "react-hot-toast";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      setLoading(true);
    e.preventDefault();
    try {
      const res = await login(username, password);
      const token = res;
      const stringToken = JSON.stringify(token);

      if (stringToken.includes("incorrecta")) {
        toast.error("Usuario o contraseña incorrecta");
      } else {
        loginUser(token);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      console.log("error");
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h3 className="text-center mb-4 text-primary fw-bold">
          Iniciar sesión
        </h3>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">
              Usuario
            </label>
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="Ingrese su usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          {/* Submit */}
          <div className="d-grid">
            <button disabled={loading} type="submit" className="btn btn-primary fw-bold">
                {loading ? "Ingresando..." : "Iniciar sesión"}

            </button>
          </div>

          <p className="text-center text-muted mt-3 mb-0">
            ¿No tienes cuenta?{" "}
            <a href="/register" className="text-decoration-none">
              Regístrate
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
