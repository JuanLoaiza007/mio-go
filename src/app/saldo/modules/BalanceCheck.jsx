"use client";
import { useState } from "react";
import { obtenerSaldo } from "@/services/api";
import { isValidNumber } from "@/utils/parserCardNumber";
import { numberToCOP } from "@/utils/numberFormats";

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
    <div className="flex flex-col justify-center items-center text-center px-4 py-8 md:px-10">
      <h1 className="text-blue-ribbon-700 text-3xl font-bold m-6">
        Consulta de Saldo
      </h1>
      <p className="w-full m-2">
        <b>NOTA:</b> Escribe el número de tarjeta sin espacios ni guiones.
      </p>
      <div className="flex w-full flex-row justify-center items-center m-4 px-4">
        <input
          className="w-full rounded-xl p-3"
          type="text"
          value={numeroTarjeta}
          onChange={(e) => setNumeroTarjeta(e.target.value)}
          placeholder="Número de tarjeta"
        />
        <button
          className="text-white bg-blue-ribbon-700 p-3 m-2 rounded-2xl"
          onClick={handleConsultarSaldo}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/icons/search-white.png"
            className="w-8 h-auto"
            alt="search"
          />
        </button>
      </div>
      <div className="flex flex-row items-center m-4">
        <p className="text-2xl">
          Saldo: <b> {numberToCOP(info) || info || "---"} </b>
        </p>
      </div>
    </div>
  );
}
