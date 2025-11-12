import { api } from "./api";

export const register = async (username, email, password, confirm_password) => {
  try {
    const response = await api.post("/register", {
      username,
      email,
      password,
      confirm_password,
    });

     return response.data;
  } catch (error) {
    console.error("Error en register:", error);
    return { success: false, message: "Error del servidor" };
  }
};

export const login = async (username, password) => {
  const response = await api.post("/login", { username, password });
  const resdata = response.data.access;
  return response.data.access;
};

export const getProtected = async (token) => {
  const res = await api.get("/protected");
  return res.data;
};

export const getDashboard = async (token) => {
  const res = await api.get("/dahsboard");
  return res.data;
};
