// utilizamos el useContext para manejar el estado global, useState para el manejo de estados y useEffect
import { createContext, useContext,useState } from "react";

//creamos el contexto
const CartContext = useContext()

//creamos un provider 

export function cartProvider({children}){
    //creamos el estado
    const [cart,setCart] = useState([])

    //agregar producto al carrito
    const addTocart = (producto) =>{
        setCart((prev)=>{
            const itemExistente= prev.find((p) => p.id == producto.id)
            if (itemExistente) {
                return prev.map((p) =>{
                    p.id == producto.id ? {...p, quantity: p.quantity + 1 } : p
                })
            } else {
                return [... prev , {... producto, quantity: 1}]
            }
        });
    };

    return(
        <CartContext.Provider value= {{cart, addTocart}}>
           {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext)
}