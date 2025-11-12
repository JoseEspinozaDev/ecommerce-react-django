import { api } from "./api";

export const register = async (username, password) => {
  try {
    const response = await api.post("/register", { username, password });
    return response.data.access;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, password) => {
  const response = await api.post("/login", { username, password });
  const resdata= response.data.access
  //alert(JSON.stringify(resdata))
  //console.log(response.data.access)
  return  response.data.access;

};

export const getProtected = async (token) => {
  const res = await api.get("/protected");
  return res.data;
};

export const getDashboard = async (token) => {
  const res = await api.get("/dahsboard");
  return res.data;
};
