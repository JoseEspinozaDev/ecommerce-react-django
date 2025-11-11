import axios from "axios";
import { api } from "./api";

export const createClient = async (data) => {
  try {
    const response = await api.post("/contact", data);
    //console.log("Cliente registrado correctamente", JSON.stringify(response));
    return { success: true };
  } catch (error) {
    console.log("Error al registrar los datos del cliente");
    throw error;
  }
};
 