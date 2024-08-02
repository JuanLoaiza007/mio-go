"use client";
import { useState } from "react";
import { obtenerSaldo } from "@/services/api";
import { isValidNumber } from "@/utils/parserCardNumber";

export default function BalanceCheck() {
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

  return (
    <div className="flex-col justify-center align-center div-balance-search">
      <h1 className="color-primary">Consulta de Saldo</h1>
      <p className="align-center">
        <b>NOTA:</b> Escribe el número de tarjeta sin espacios ni guiones.
      </p>
      <div className="flex-row justify-center align-center">
        <input
          className="input-tarjeta"
          type="text"
          value={numeroTarjeta}
          onChange={(e) => setNumeroTarjeta(e.target.value)}
          placeholder="Número de tarjeta"
        />
        <button
          className="btn btn-primary button-search"
          onClick={handleConsultarSaldo}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/icons/search-white.png"
            className="icon-search"
            alt="search"
          />
        </button>
      </div>

      <p>
        Saldo: <b>{info}</b>
      </p>
    </div>
  );
}
