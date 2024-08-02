"use client";
import "./page.css";
import { useEffect, useState } from "react";
import CardDeck from "@/app/saldo/modules/CardDeck";
import BalanceCheck from "@/app/saldo/modules/BalanceCheck";
import {
  guardarEnLocalStorage,
  obtenerDeLocalStorage,
} from "@/utils/localStorageUtils";

export default function Home() {
  const [cards, setCards] = useState([]);

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

  return (
    <main className="main-content">
      <BalanceCheck />
      <CardDeck cardsState={[cards, setCards]} />
    </main>
  );
}
