import { api } from "./api";


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
