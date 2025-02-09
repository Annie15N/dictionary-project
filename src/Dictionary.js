import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResult(response) {
    setResults(response.data);
  }

  function handlePhotosResult(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let dictionaryApiKey = "0cod3f6efbetca0af47e36320cff442c";
    let dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${dictionaryApiKey}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResult);

    let photosApiKey = "0cod3f6efbetca0af47e36320cff442c";
    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${photosApiKey}`;

    axios.get(photosApiUrl).then(handlePhotosResult);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h3>What word do you want to look up?</h3>
          <form onSubmit={handleSearch}>
            <input
              type="search"
              autoFocus={true}
              placeholder={props.defaultWord}
              onChange={handleWordChange}
              className="search-input"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
