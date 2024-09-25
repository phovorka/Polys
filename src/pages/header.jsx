import React from 'react';
import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className="text-purple-800 font-bold text-xl">Polysearch</div>
         <div className="text-purple-300  ">How it works?</div>
         <Link to="/" className="text-white hover:text-blue-400">
          Home
        </Link>
      </header>

    </div>
  );
};

export default Top;