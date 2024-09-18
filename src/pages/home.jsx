import * as React from "react";

export default function Home() {


  return (
   
      
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Nadpis s logem */}
      <div className="flex items-center space-x-4 mb-8">
        <img
          src="https://via.placeholder.com/50"
          alt="Logo"
          className="w-12 h-12"
        />
        <h1 className="text-3xl font-bold">Můj Web</h1>
      </div>

      {/* Vyhledávací pole */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Vyhledávejte zde..."
          className="border border-gray-300 rounded-lg p-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tlačítka v jedné linii */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Tlačítko 1</button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Tlačítko 2</button>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">Tlačítko 3</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">Tlačítko 4</button>
      </div>
    </div>
  
  );
}
