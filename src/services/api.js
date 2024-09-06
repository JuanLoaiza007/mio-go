import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const obtenerSaldo = async (numeroTarjeta) => {
  try {
    const response = await api.get(`saldo.php?card=${numeroTarjeta}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el saldo:", error);
    throw error;
  }
};
