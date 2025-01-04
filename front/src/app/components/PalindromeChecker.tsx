"use client";
import { useState } from "react";
import { PalindromeCheckerProps } from "../interfaces";
import { checkPalindromeApi } from "../http/index";

export default function PalindromeChecker({
  onAddToHistory,
}: PalindromeCheckerProps) {
  const [text, setText] = useState("");
  const [result, setResult] = useState<boolean | null>(null);

  const checkPalindrome = async () => {
    if (!text.trim()) return;

    try {
      const data = await checkPalindromeApi(text);
      setResult(data.isPalindrome);
      onAddToHistory(text, data.isPalindrome);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Checkemos si es Palíndromo</h2>
      <input
        type="text"
        placeholder="Ingresa un texto"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={checkPalindrome}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
      {result !== null && (
        <p
          className={`mt-4 font-medium ${
            result ? "text-green-600" : "text-red-600"
          }`}
        >
          {result ? "Es un palíndromo!" : "No es un palíndromo."}
        </p>
      )}
    </div>
  );
}
