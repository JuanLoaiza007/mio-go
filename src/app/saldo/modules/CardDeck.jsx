"use client";
import Card from "@/app/components/Card";
import { isValidNumber } from "@/utils/parserCardNumber";
import { guardarEnLocalStorage } from "@/utils/localStorageUtils";
import { parseCardNumber } from "@/utils/parserCardNumber";

export default function CardDeck({ cardsState }) {
  const [cards, setCards] = cardsState;

  const handleAgregar = async () => {
    const numeroTarjeta = prompt("Ingresa el número de la tarjeta");

    if (!isValidNumber(numeroTarjeta)) {
      alert("El número de tarjeta no es válido");
      return;
    }
    if (cards.find((card) => card.number === numeroTarjeta)) {
      alert("La tarjeta ya está registrada");
      return;
    }
    setCards([
      ...cards,
      {
        name: parseCardNumber(numeroTarjeta),
        number: numeroTarjeta,
        balance: "-",
      },
    ]);
  };

  const handleClean = () => {
    if (confirm("¿Estás seguro de que quieres eliminar todas las tarjetas?")) {
      setCards([]);
      guardarEnLocalStorage("cards", []);
    }
  };

  return (
    <div className="flex flex-1 flex-col bg-blue-ribbon-200 rounded-t-3xl md:rounded-t-none p-4">
      <div className="flex flex-row px-4 py-8 justify-between items-center">
        <h1 className="text-blue-ribbon-700 text-3xl font-bold">Tarjetas</h1>
        <button
          className="text-white bg-blue-ribbon-700 py-3 px-4 m-2 rounded-2xl font-bold"
          onClick={handleAgregar}
        >
          +
        </button>
      </div>
      <div className="grid grid-rows-1 xl:grid-cols-2 2xl:grid-cols-3">
        {cards.map((card) => (
          <Card key={parseCardNumber(card.number)} card={card} />
        ))}
      </div>
      {cards.length > 0 && (
        <button
          className="text-white bg-red-600 py-3 px-4 m-2 rounded-2xl font-bold"
          onClick={handleClean}
        >
          Eliminar todas las tarjetas
        </button>
      )}
    </div>
  );
}
