import React from "react";

import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>

        <Phonetics phonetic={props.results.phonetic} />

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
