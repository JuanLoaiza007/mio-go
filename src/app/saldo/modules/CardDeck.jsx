"use client";
import Card from "@/app/components/Card";
import { guardarEnLocalStorage } from "@/utils/localStorageUtils";
import { parseCardNumber } from "@/utils/parserCardNumber";

export default function CardDeck({ cardsState }) {
  const [cards, setCards] = cardsState;

  // const handleRegistrar = async () => {
  //   if (!isValidNumber(numeroTarjeta)) {
  //     alert("El número de tarjeta no es válido");
  //     return;
  //   }
  //   if (cards.find((card) => card.number === numeroTarjeta)) {
  //     alert("La tarjeta ya está registrada");
  //     return;
  //   }
  //   setCards([
  //     ...cards,
  //     {
  //       name: parseCardNumber(numeroTarjeta),
  //       number: numeroTarjeta,
  //       balance: "-",
  //     },
  //   ]);
  //   setNumeroTarjeta("");
  // };

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
      {/* <button className="btn btn-primary" onClick={handleRegistrar}>
        Guardar tarjeta
      </button> */}
      {cards.map((card) => (
        <Card key={parseCardNumber(card.number)} card={card} />
      ))}
      {cards.length > 0 && (
        <button className="btn btn-danger" onClick={handleClean}>
          Eliminar todas las tarjetas
        </button>
      )}
    </div>
  );
}
