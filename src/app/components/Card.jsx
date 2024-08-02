"use client";
import "./Card.css";
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
    <div className="card">
      <b>{nombre}</b>
      <p>Número de tarjeta:</p>
      <b>{parseCardNumber(numeroTarjeta)}</b>
      <p>Saldo:</p>
      <b>{numberToCOP(saldo) || saldo}</b>
      <button className="btn btn-light" onClick={handleConsultarSaldo}>
        Actualizar saldo
      </button>
    </div>
  );
}
