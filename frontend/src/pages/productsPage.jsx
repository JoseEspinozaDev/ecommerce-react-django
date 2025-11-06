import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import { useCart } from "../context/CartContext";


function ProductsPage() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {addToCart} = useCart()
  //para llamada a la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProductos(data);
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
        {productos.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              {/* Contenedor de imagen centrada */}
              <div
                className="d-flex justify-content-center align-items-center p-3"
                style={{ height: "200px", overflow: "hidden" }}
              >
                <img
                  src={product.img_products || "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"}
                  alt={product.name}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain", // evita deformar la imagen
                  }}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text fw-bold mt-auto">${product.price}</p>
                <button onClick={() => addToCart(product)} className="btn btn-primary mt-2">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
