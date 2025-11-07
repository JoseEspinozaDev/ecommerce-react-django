import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export const createClient = async (data) => {
  try {
    const response = await api.post("/contact", data);
    8//console.log("Cliente registrado correctamente", JSON.stringify(response));
    return { success: true };
  } catch (error) {
    console.log("Error al registrar los datos del cliente");
    throw error;
  }
};
