"use client";
import { useState } from "react";
import { obtenerSaldo } from "@/services/api";
import {
  isValidNumber,
  isParsedNumber,
  unparseCardNumber,
} from "@/utils/parserCardNumber";
import { numberToCOP } from "@/utils/numberFormats";

export default function BalanceCheck() {
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [info, setInfo] = useState("");

  const formatearNumeroTarjeta = (valor) => {
    let soloNumeros = valor.replace(/\D/g, ""); // Eliminar cualquier carácter que no sea un número

    if (soloNumeros.length > 2) {
      soloNumeros = soloNumeros.replace(/^(\d{2})(\d)/, "$1.$2");
    }
    if (soloNumeros.length > 5) {
      soloNumeros = soloNumeros.replace(/^(\d{2})\.(\d{2})(\d)/, "$1.$2-$3");
    }
    if (soloNumeros.length > 14) {
      soloNumeros = soloNumeros.replace(
        /^(\d{2})\.(\d{2})-(\d{8})(\d)/,
        "$1.$2-$3-$4"
      );
    }

    return soloNumeros;
  };

  const handleInputChange = (e) => {
    const valorFormateado = formatearNumeroTarjeta(e.target.value);
    setNumeroTarjeta(valorFormateado);
  };

  const handleConsultarSaldo = async () => {
    let cardNumber = numeroTarjeta.replace(/\D/g, "");
    if (!isValidNumber(cardNumber)) {
      alert("El número de tarjeta no es válido");
      setNumeroTarjeta("");
      return;
    }
    try {
      const data = await obtenerSaldo(cardNumber);
      setInfo(data.balance || "Saldo no disponible");
    } catch (e) {
      setInfo("Error al obtener el saldo");
    }
  };

  return (
    <div className="flex flex-col justify-start items-center text-center px-4 py-8 md:max-w-md md:pt-52 lg:px-8 lg:max-w-xl xl:max-w-2xl xl:px-20">
      <h1 className="text-blue-ribbon-700 text-3xl font-bold m-6">
        Consulta de Saldo
      </h1>
      <p className="w-full m-2">
        Consulte el saldo de su tarjeta MIO, para continuar digite el número sin
        letras ni caracteres especiales:
      </p>
      <div className="flex w-full flex-row justify-center items-center m-4 px-4">
        <input
          className="w-full rounded-xl p-3"
          type="text"
          value={numeroTarjeta}
          onChange={handleInputChange}
          placeholder="Número de tarjeta"
          maxLength={16}
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
