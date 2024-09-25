// pridej Lokaci ukazka

import * as React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState(""); // State for search input
  const [locationValue, setLocationValue] = useState(""); // State for location input
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading

  const id = "1nc9iRz8njhfVdZslBrwyB52BLBYMArbwu2nnkCeBD9Q";
  const gid = "1";
  const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:json&tq&gid=${gid}`;

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        
        const jsonStr = text.match(/google\.visualization\.Query\.setResponse\((.+)\);/)[1];
        const parsedData = JSON.parse(jsonStr);

        const rows = parsedData.table.rows.slice(1); // Skip the header row
        const data = rows.map((row) => {
          return {
            label: row.c[0]?.v, // First column: Label
            baseUrl: row.c[1]?.v, // Second column: Base URL
            endUrl: row.c[2]?.v || "", // Third column: End URL or empty string
          };
        });

        setLinks(data);
        setLoading(false); // Data loaded, stop loading spinner
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchSheetData();
  }, []);

  // Function to open link with text from input and location
  const openLink = (baseUrl, endUrl) => {
    const fullUrl = `${baseUrl}${endUrl}${encodeURIComponent(inputValue)}&location=${encodeURIComponent(locationValue)}`;
    window.open(fullUrl, "_blank");
  };

  return (
    <div className="pt-40 pb-60 bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="https://cdn.glitch.global/2222818e-a3bd-45a1-bab7-d9b34184a3e0/work-forecast.svg?v=1727182701684"
          alt="Logo"
          className="w-12 h-12"
        />
        <h1 className="text-3xl font-bold">Jobs search</h1>
      </div>

      <div className="mb-6 relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12.9 14.32a7.5 7.5 0 111.414-1.414l4.387 4.387a1 1 0 11-1.414 1.414l-4.387-4.387zM13 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" clipRule="evenodd" />
          </svg>
        </span>
        <input
          type="text"
          className="border border-gray-300 font-sm rounded-lg p-2 pl-10 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter search text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {/* Input for location */}
      <div className="mb-6 relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9 8.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-1 5.5a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zm9 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" clipRule="evenodd" />
          </svg>
        </span>
        <input
          type="text"
          className="border border-gray-300 font-sm rounded-lg p-2 pl-10 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter location"
          value={locationValue}
          onChange={(e) => setLocationValue(e.target.value)}
        />
      </div>

      {/* Show spinner if loading is true */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="button-container">
          {links.map((link, index) => {
            const imageUrl = `http://www.google.com/s2/favicons?domain=${link.baseUrl}`;

            return (
              <button
                key={index}
                className="text-sm button-item bg-blue-500 items-center justify-center text-white rounded-lg hover:bg-blue-600"
                onClick={() => openLink(link.baseUrl, link.endUrl)}
              >
                <img
                  src={imageUrl}
                  alt=""
                  className="justify-center"
                  style={{ width: "20px", height: "20px", marginRight: "6px" }}
                />
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
