import React from "react";
import { HistoryWordsProps } from "../interfaces";

const HistoryWords: React.FC<HistoryWordsProps> = ({ history }) => {
  return (
    <div className="history-list p-4 bg-gray-100 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Historial</h2>
      {history.length === 0 ? (
        <p className="text-gray-500">No hay palabras aún.</p>
      ) : (
        <ul className="space-y-2">
          {history.map((item, index) => (
            <li
              key={index}
              className={`p-2 rounded ${
                item.isPalindrome
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryWords;