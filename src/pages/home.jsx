import * as React from "react";
import { useState, useEffect } from "react";

// Header component
const Home = () => {
  const [links, setLinks] = useState([]);

  // Načtení JSON souboru při načtení komponenty
  useEffect(() => {
    // Simulace načtení dat z JSON souboru
    fetch("/links.json")
      .then((response) => response.json())
      .then((data) => setLinks(data.links));
  }, []);

  // Funkce pro otevření odkazu v novém okně
  const openLink = (url) => {
    window.open(url, "_blank"); // Otevření odkazu v novém okně
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Nadpis s logem */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="https://via.placeholder.com/50"
          alt="Logo"
          className="w-12 h-12"
        />
        <h1 className="text-3xl font-bold font-poppins">Code inspiration</h1>
      </div>

      {/* Vyhledávací pole */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search prompt..."
          className="border border-gray-300 rounded-lg p-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tlačítka v jedné linii */}
      <div className="flex space-x-1">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Tlačítko 1
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
          Tlačítko 2
        </button>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
          Tlačítko 3
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
          Tlačítko 4
        </button>
      </div>
    </div>
  );
};
