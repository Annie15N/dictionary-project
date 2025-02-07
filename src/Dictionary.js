import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function handleResult(response) {}

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);

    let apiKey = "0cod3f6efbetca0af47e36320cff442c";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word={word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResult);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Search for a word ... "
          onChange={handleWordChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
