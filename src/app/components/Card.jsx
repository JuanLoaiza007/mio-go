"use client";
import { useState } from "react";
import { obtenerSaldo } from "@/services/api";
import { parseCardNumber } from "@/utils/parserCardNumber";
import { numberToCOP } from "@/utils/numberFormats";

export default function Card({ card }) {
  const [nombre, setNombre] = useState(card.name);
  const [numeroTarjeta, setNumeroTarjeta] = useState(card.number);
  const [saldo, setSaldo] = useState(card.balance);

  const handleConsultarSaldo = async () => {
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
      <button
        className="text-blue-ribbon-700 bg-white p-3 m-2 rounded-2xl mt-4 font-bold"
        onClick={handleConsultarSaldo}
      >
        Actualizar saldo
      </button>
    </div>
  );
}
