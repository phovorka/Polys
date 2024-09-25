import React from 'react';
import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
    <Link to="/main.jsx" className="text-purple-800 font-bold text-xl  hover:text-blue-400">
        Polysearch
    </Link>

         <Link to="/how.jsx" className="text-purple-500 hover:text-blue-400">
          How it works?
        </Link>
      </header>

    </div>
  );
};

export default Top;