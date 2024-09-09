import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const card = searchParams.get("card");

  if (!card) {
    return new Response(
      JSON.stringify({ message: "Número de tarjeta es requerido" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    const response = await api.get(`/saldo.php?card=${card}`);

    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error al obtener el saldo:", error);
    return new Response(
      JSON.stringify({ message: "Error al obtener el saldo" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
