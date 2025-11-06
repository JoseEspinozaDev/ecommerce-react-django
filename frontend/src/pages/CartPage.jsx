import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, clearCart, total } = useCart();

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Carrito de compras</h1>
      {cart.length === 0 ? (
        <p className="text-center">Tu carrito esta vacio</p>
      ) : (
        <>
          <table className="table table-bordered align-midle text-center">
            <thead className="table-dark">
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td> {item.name} </td>
                  <td>${item.price} </td>
                  <td> {item.quantity} </td>
                  <td>${item.price * item.quantity} </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-end mt-3">
              <h4>Total: ${total} </h4>
              <button className="btn btn-outline-danger me-2" onClick={clearCart}>Vaciar carrito</button>
              <button className="btn btn-success">Procede al pago</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;