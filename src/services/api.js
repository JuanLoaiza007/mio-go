import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const obtenerSaldo = async (numeroTarjeta) => {
  try {
    const cardDigits = numeroTarjeta.substring(4, 12);
    const cardType = numeroTarjeta.substring(3, 4);
    const response = await api.get(
      `cliete.php?card=${cardDigits}&type=${cardType}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener el saldo:", error);
    throw error;
  }
};
