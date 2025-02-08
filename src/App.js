import React from "react";

import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultWord={"peanut"} />
        </main>
        <footer className="text-center mt-3">
          Coded by Annie Nelson and is open-source on{" "}
          <a
            href="https://github.com/Annie15N/dictionary-project"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and is hosted on{" "}
          <a
            href="https://spectacular-trifle-c923d8.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
