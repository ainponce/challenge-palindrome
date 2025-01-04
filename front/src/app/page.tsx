"use client";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PalindromeChecker from "./components/PalindromeChecker";
import HistoryWords from "./components/HistoryWords";
import { HistoryItem } from "../app/interfaces/index";

export default function Home() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const addToHistory = (word: string, isPalindrome: boolean) => {
    setHistory((prev) => [...prev, { word, isPalindrome }]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
          <div className="lg:w-1/2">
            <PalindromeChecker onAddToHistory={addToHistory} />
          </div>
          <div className="lg:w-1/2">
            <HistoryWords history={history} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
