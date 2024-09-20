import * as React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState([]);


  
    // .......................................................................ID of the Google Spreadsheet
  const id = "1nc9iRz8njhfVdZslBrwyB52BLBYMArbwu2nnkCeBD9Q";
  const gid = "1";
  const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:json&tq&gid=${gid}`;
console.log(url);
  let myItems;
  const loaderElement = document.getElementById("loader");
  if (loaderElement) {
    loaderElement.style.display = "block";
  }

 
  // Načtení dat z JSON souboru
  useEffect(() => {
  const fetchSheetData = async () => {
      try {
        const response = await fetch(url);
        const text = await response.text();

        // Najdeme část, která obsahuje JSON data
        const jsonStr = text.match(/google\.visualization\.Query\.setResponse\((.+)\);/)[1];
        const parsedData = JSON.parse(jsonStr);  // Konverze na objekt

        // Extrahujeme potřebná data (label, baseUrl, případně imageUrl)
        const rows = parsedData.table.rows.slice(1);  // slice(1) přeskočí první řádek
        const data = rows.map(row => {
          return {
            label: row.c[0].v,         // První sloupec: Label
            baseUrl: row.c[1].v,       // Druhý sloupec: Base URL
          };
        });

        setLinks(data);
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };

    fetchSheetData();
  }, []);
  
  // Funkce pro otevření odkazu s textem z inputu
  const openLink = (baseUrl) => {
    const fullUrl = `${baseUrl}${encodeURIComponent(inputValue)}`;
    window.open(fullUrl, "_blank");
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

      {/* Input pro zadání textu */}
      <div className="mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter search text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>


      {/* Tlačítka pro otevření odkazů */}
     
<div className="button-container">
        {links.map((link, index) => {
          // Složený obrázek: základní obrázek + Google ikona
          const imageUrl = `http://www.google.com/s2/favicons?domain=${link.baseUrl}`;

          return (
            <button
              key={index}
              className="button-item bg-blue-500 items-center justify-center text-white rounded-lg hover:bg-blue-600 "
              onClick={() => openLink(link.baseUrl)}
            >
              {/* Obrázek */}
              <img src={imageUrl} alt="" className=" justify-center " style={{ width: '20px', height: '20px', marginRight: '6px' }}/>
              {/* Text tlačítka */}
              {link.label}
            </button>
          );
        })}
      </div>
  
      </div>
  );
};

export default Home;

