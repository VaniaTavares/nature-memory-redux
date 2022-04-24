import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./app/routes";
import { AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <h1 className="app__header">Nature Memory</h1>
      <AnimatePresence>
        <AnimatedRoutes />
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
