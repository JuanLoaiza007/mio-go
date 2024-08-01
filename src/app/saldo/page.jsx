"use client";
import { useEffect, useState } from "react";
import { obtenerSaldo } from "@/services/api";
import { parseCardNumber, isValidNumber } from "@/utils/parserCardNumber";
import {
  guardarEnLocalStorage,
  obtenerDeLocalStorage,
} from "@/utils/localStorageUtils";
import Card from "@/app/components/Card";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    // Por primera vez obtener las tarjetas guardadas en el local storage si es que hay
    if (typeof window !== "undefined") {
      const storedCards = obtenerDeLocalStorage("cards");
      if (storedCards) {
        setCards(storedCards);
      } else {
        setCards([]);
        guardarEnLocalStorage("cards", []);
      }
    }
  }, []);

  useEffect(() => {
    // Si hay cambios en el estado, guardarlo en el local storage
    if (typeof window !== "undefined") {
      // No guardar un arreglo vacío
      if (cards.length > 0) {
        guardarEnLocalStorage("cards", cards);
      }
    }
  }, [cards]);

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

  const handleClean = () => {
    if (confirm("¿Estás seguro de que quieres eliminar todas las tarjetas?")) {
      setCards([]);
      guardarEnLocalStorage("cards", []);
    }
  };

  return (
    <main>
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
        <div>
          <button className="btn btn-primary" onClick={handleConsultarSaldo}>
            Consultar saldo
          </button>
          <button className="btn btn-primary" onClick={handleRegistrar}>
            Guardar tarjeta
          </button>
        </div>
      </div>
      <p>Saldo: {info}</p>
      <div className="div-saldo"></div>
      {cards.map((card) => (
        <Card key={card.number} card={card} />
      ))}
      {cards.length > 0 && (
        <button className="btn btn-danger" onClick={handleClean}>
          Eliminar todas las tarjetas
        </button>
      )}
    </main>
  );
}
