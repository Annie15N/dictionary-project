import React from "react";

import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaining);
  if (props.meaning.example !== null) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>
          <strong>Defintion:</strong>
          {""}
          {props.meaning.definition}
        </p>
        <p>
          <strong>Example:</strong> {""}
          {props.meaning.example}
        </p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>
          <strong>Defintion:</strong> {""}
          {props.meaning.definition}
        </p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  }
}
