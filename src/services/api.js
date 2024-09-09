import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const obtenerSaldo = async (numeroTarjeta) => {
  try {
    const response = await api.get(`/saldo?card=${numeroTarjeta}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el saldo:", error);
    throw error;
  }
};
