import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-300 justify-center text-blue py-6">
      <p className="text-center">© 2024 Code Inspiration. All rights reserved.</p>
      <div className="flex justify-center mt-4 space-x-4">
        <a
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-of-service"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;