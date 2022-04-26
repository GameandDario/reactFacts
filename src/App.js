import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import TruthContent from "./components/TruthContent";

import "./style/App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <TruthContent />
    </>
  );
}
