import React from "react";

import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning.example !== null) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p className="definition">{props.meaning.definition}</p>
        <p className="example">"{props.meaning.example}"</p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p className="definition">{props.meaning.definition}</p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  }
}
