import React from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";

import Main from "./components/Main/Main";
import "./components/Main/Main.css";

function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
