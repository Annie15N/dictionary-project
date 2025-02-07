import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
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
