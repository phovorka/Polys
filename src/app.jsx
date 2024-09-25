import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import Footer from "./pages/footer";
import Header from "./pages/header";
import How from "./pages/how";

// Import and apply CSS stylesheet from Tailwind
import "./styles/styles.css";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Definice jednotlivých stránek */}
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/how" element={<How />} />
        </Routes>
        <Footer />
      </Router>

      
    </>
  );
}
