import React from "react";

import Main from "./pages/home.jsx";
import Footer from "./pages/foot.jsx";
import Header from "./pages/top.jsx";

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
