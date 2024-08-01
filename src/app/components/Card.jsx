"use client";
import "./Card.css";
import { useState } from "react";
import { obtenerSaldo } from "@/services/api";

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
      <p>
        <b>Nombre:</b> {nombre}
      </p>
      <p>
        <b>Número de tarjeta:</b> {numeroTarjeta}
      </p>
      <p>
        <b>Saldo:</b> {saldo}
      </p>
      <button className="btn btn-primary" onClick={handleConsultarSaldo}>
        Actualizar saldo
      </button>
    </div>
  );
}
