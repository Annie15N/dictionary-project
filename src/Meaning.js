import React from "react";

export default function Meaning(props) {
  console.log(props.meaining);
  if (props.meaning.example !== null) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>
          Defintion: {""}
          {props.meaning.definition}
        </p>
        <p>
          Example: {""}
          {props.meaning.example}
        </p>
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>
          Defintion: {""}
          {props.meaning.definition}
        </p>
      </div>
    );
  }
}
