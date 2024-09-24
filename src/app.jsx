import React from "react";

import Main from "./pages/main.jsx";
import Footer from "./pages/footer.jsx";
import Header from "./pages/header.jsx";

// Import and apply CSS stylesheet from Tailwind
import "./styles/styles.css";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
