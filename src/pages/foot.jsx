import React from "react";

const Footer = () => {
  return (
    <footer className="bg-grey-300 text-blue p-4 text-sm text-center  w-full">
      <p className="">© 2024 Code Inspiration. All rights reserved.</p>
      <div className="flex justify-center mt-4 space-x-4">
        <a
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"

        >
          Privacy Policy
        </a>
        <a
          href="/terms-of-service"
          target="_blank"
          rel="noopener noreferrer"

        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;