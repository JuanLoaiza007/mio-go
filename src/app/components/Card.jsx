"use client";
import { useState } from "react";
import { obtenerSaldo } from "@/services/api";
import { parseCardNumber } from "@/utils/parserCardNumber";
import { numberToCOP } from "@/utils/numberFormats";

export default function Card({ card, cardsState }) {
  const [cards, setCards] = cardsState;
  const [nombre, setNombre] = useState(card.name);
  const [numeroTarjeta, setNumeroTarjeta] = useState(card.number);
  const [saldo, setSaldo] = useState(card.balance);

  const handleEliminarTarjeta = () => {
    if (confirm("¿Estás seguro de que quieres eliminar esta tarjeta?")) {
      setCards(cards.filter((card) => card.number !== numeroTarjeta));
    }
  };

  const handleEditarTarjeta = () => {
    const nombreTarjeta = prompt("Ingresa el nombre de la tarjeta");
    if (nombreTarjeta) {
      setNombre(nombreTarjeta);
    }
    setCards(
      cards.map((card) =>
        card.number === numeroTarjeta ? { ...card, name: nombreTarjeta } : card
      )
    );
  };

  const handleSincronizarSaldo = async () => {
    try {
      const data = await obtenerSaldo(numeroTarjeta);
      setSaldo(data.balance || "Saldo no disponible");
    } catch (e) {
      setSaldo("Saldo no disponible");
    }
  };

  return (
    <div className="flex flex-col flex-wrap rounded-2xl m-4 py-10 px-8 bg-blue-ribbon-700 text-white">
      <p className="text-xl font-bold">{nombre}</p>
      <p className="mt-2">Número de tarjeta:</p>
      <p className="text-xl font-bold">{parseCardNumber(numeroTarjeta)}</p>
      <p className="mt-4">Saldo:</p>
      <p className="text-2xl font-bold">{numberToCOP(saldo) || saldo}</p>
      <div className="flex flex-row flex-wrap justify-center mt-4">
        <button
          className="text-white bg-red-600 p-2 mx-4 rounded-2xl mt-4 font-bold"
          onClick={handleEliminarTarjeta}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-8"
            src="/assets/icons/trash-white.png"
            alt="trash"
          />
        </button>
        <button
          className="text-blue-ribbon-700 bg-white p-2 mx-4 rounded-2xl mt-4 font-bold"
          onClick={handleEditarTarjeta}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-8" src="/assets/icons/pencil-blue.png" alt="edit" />
        </button>
        <button
          className="text-blue-ribbon-700 bg-white p-2 mx-4 rounded-2xl mt-4 font-bold"
          onClick={handleSincronizarSaldo}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-8"
            src="/assets/icons/refresh-blue.png"
            alt="refresh"
          />
        </button>
      </div>
    </div>
  );
}
