import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});


export const getProducts = async () => {
    try {
        const response = await api.get("/products")
        console.log(response)
        return response.data
    } catch (error) {
        console.log('Error al obtener los datos')
        throw error
    }
}

export const registerClient = async (data) =>{
    try {
        const response = await api.post('/products',data)
        return response.data
        console.log('Cliente registrado correctamente', JSON.stringify(response))
    } catch (error) {
        console.log('Error al registrar los datos del cliente')
        throw error
    }
}