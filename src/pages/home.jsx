import * as React from "react";
import { useState,useEffect  } from 'react';



const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [links, setLinks] = useState([]);
  
    // Načtení odkazu z JSON souboru
  useEffect(() => {
    fetch('../links.json')
      .then((response) => response.json())
      .then((data) => setLinks(data.links));
  }, []);
  

  // Funkce pro otevření odkazu s textem z inputu
  const openLink = (baseUrl) => {
    const fullUrl = `${baseUrl}${encodeURIComponent(inputValue)}`;
    window.open(fullUrl, '_blank');
  };

  return (
    <div className="p-8">
      {/* Logo a nadpis */}
      <div className="flex items-center mb-4">

        <h1 className="text-4xl font-bold font-poppins">Code Inspiration</h1>
      </div>

      {/* Input pro zadání textu */}
      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter search text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {/* Tlačítko pro otevření odkazu */}
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={openLinkWithInput}
        >
          Open Link with Input Text
        </button>
      </div>
    </div>
  );
};

export default Home;