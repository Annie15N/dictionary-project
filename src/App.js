import React from "react";

import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center mt-3">Coded by Annie Nelson</footer>
      </div>
    </div>
  );
}
