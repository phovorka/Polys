import React from "react";

const Footer = () => {
  return (
    <footer className="bg-grey-300 text-grey p-4 text-sm text-center  w-full">
      <p className="">© 2024 Stack: React, Tailwind, Google Sheets</p>
      <div className="flex justify-center mt-4 space-x-4">
        <a
          href="https://docs.google.com/spreadsheets/d/1nc9iRz8njhfVdZslBrwyB52BLBYMArbwu2nnkCeBD9Q/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sheet link
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Polysearch
        </a>
        <a
          className="btn--remix"
          target="_top"
          href="https://glitch.com/edit/#!/remix/awesome-polysearch"
        >
          <img
            src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140"
            alt=""
          />
          Remix on Glitch
        </a>
      </div>
    </footer>
  );
};

export default Footer;
