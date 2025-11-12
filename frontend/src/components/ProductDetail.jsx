import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { getProductDetail } from "../api/ProductDetailAPI";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
function ProductDetail() {
  // hooks
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductDetail = async () => {
      console.log(id);
      try {
        const data = await getProductDetail(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetail();
  }, [id]);

  if (!product)
    return <h2 className="text-center mt-5">Producto no encontrado 😢</h2>;
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5"> {product.name}</h1>
      <div className="card h-100 shadow-sm">
        {/* Contenedor de imagen centrada */}
        <div
          className="d-flex justify-content-center align-items-center p-3"
          style={{ height: "200px", overflow: "hidden" }}
        >
          <img
            src={
              product.img_products ||
              "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
            }
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
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary mt-2"
          >
            Agregar al carrito
          </button>
              <h6 className="card-title text-secondary">
          <Link
            to={`/productos`}
            className="btn btn-warning text-decoration-none text-white mt-2"
          >
            Volver
          </Link>
        </h6>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
