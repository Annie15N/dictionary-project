import React from "react";

import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h5>
          <em>/{props.results.phonetic}/</em>
        </h5>
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
