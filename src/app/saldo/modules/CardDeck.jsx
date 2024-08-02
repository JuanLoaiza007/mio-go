"use client";
import Card from "@/app/components/Card";
import { guardarEnLocalStorage } from "@/utils/localStorageUtils";

export default function CardDeck({ cardsState }) {
  const [cards, setCards] = cardsState;

  const handleClean = () => {
    if (confirm("¿Estás seguro de que quieres eliminar todas las tarjetas?")) {
      setCards([]);
      guardarEnLocalStorage("cards", []);
    }
  };

  return (
    <div className="div-cards">
      <h1 className="flex-col justify-center align-center color-primary">
        Tarjetas
      </h1>
      {cards.map((card) => (
        <Card key={card.number} card={card} />
      ))}
      {cards.length > 0 && (
        <button className="btn btn-danger" onClick={handleClean}>
          Eliminar todas las tarjetas
        </button>
      )}
    </div>
  );
}
