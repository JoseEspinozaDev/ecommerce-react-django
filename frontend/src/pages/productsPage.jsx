import { useEffect, useState } from "react";
import { api, getProducts } from "../api/api";

function ProductsPage() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
 
  //para llamada a la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProductos(data.slice(0,6));
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="spinner-border text-primary container" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">🛒 Productos</h1>
      <div className="row">
        {productos.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              {/* Contenedor de imagen centrada */}
              <div
                className="d-flex justify-content-center align-items-center p-3"
                style={{ height: "200px", overflow: "hidden" }}
              >
                <img
                  src={p.img_products || "https://via.placeholder.com/200"}
                  alt={p.name}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain", // evita deformar la imagen
                  }}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description}</p>
                <p className="card-text fw-bold mt-auto">${p.price}</p>
                <button className="btn btn-primary mt-2">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
