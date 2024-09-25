import React from "react";

import Main from "./pages/main.jsx";
import Footer from "./pages/footer.jsx";
import Header from "./pages/header.jsx";
import How from "./pages/how.jsx";

// Import and apply CSS stylesheet from Tailwind
import "./styles/styles.css";

export default function App() {
  return (
    <>
      <Header />
      <How />
      <Main />
      <Footer />
    </>
  );
}
