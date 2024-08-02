"use client";
import { useState } from "react";
import { obtenerSaldo } from "@/services/api";
import { parseCardNumber, isValidNumber } from "@/utils/parserCardNumber";

export default function BalanceCheck({ cardsState }) {
  const [cards, setCards] = cardsState;
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [info, setInfo] = useState("");

  const handleConsultarSaldo = async () => {
    if (!isValidNumber(numeroTarjeta)) {
      alert("El número de tarjeta no es válido");
      setNumeroTarjeta("");
      return;
    }
    try {
      const data = await obtenerSaldo(numeroTarjeta);
      setInfo(data.balance || "Saldo no disponible");
    } catch (e) {
      setInfo("Error al obtener el saldo");
    }
  };

  const handleRegistrar = async () => {
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
    setNumeroTarjeta("");
  };

  return (
    <div className="flex-col justify-center align-center div-balance-search">
      <h1 className="color-primary">Consulta de Saldo</h1>
      <p className="align-center">
        <b>NOTA:</b> Escribe el número de tarjeta sin espacios ni guiones.
      </p>
      <div>
        <input
          className="input-tarjeta"
          type="text"
          value={numeroTarjeta}
          onChange={(e) => setNumeroTarjeta(e.target.value)}
          placeholder="Número de tarjeta"
        />
        <div className="div-balance-items">
          <button className="btn btn-primary" onClick={handleConsultarSaldo}>
            Consultar saldo
          </button>
          <button className="btn btn-primary" onClick={handleRegistrar}>
            Guardar tarjeta
          </button>
        </div>
      </div>
      <p>Saldo: {info}</p>
    </div>
  );
}
