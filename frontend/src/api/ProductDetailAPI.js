import { api } from "./api";


export const getProductDetail= async (id) => {
    try {
        const response = await api.get(`/products/${id}`)
        const producto = response.data
        return producto
    } catch (error) {
        console.log('Error al hacer fetch de productos')
        throw error
    }
}