import React from "react";


import Home from "./pages/home.jsx";
import Footer from "./pages/foot.jsx";
import Header from "./pages/top.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.css";

export default function App() {
  return (
    <>
            <Header />

      <Home />
      <Footer />  
    </>
  );
}
