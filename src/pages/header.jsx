import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <Link
          to="/main"
          className="text-purple-800 font-bold text-xl  hover:text-blue-400"
        >  <img src="https://cdn.glitch.global/2222818e-a3bd-45a1-bab7-d9b34184a3e0/Frame%201%20(2).svg?v=1727263360970"  className=" " />
          Polysearch
        </Link>
        <Link to="/how" className="text-purple-500 hover:text-blue-400">
          How it works?
        </Link>
      </header>
    </div>
  );
};

export default Top;
