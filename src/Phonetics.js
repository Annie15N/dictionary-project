import React from "react";

export default function Phonetics(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetics">
        <h5>
          <em>/{props.phonetic}/</em>
        </h5>
      </div>
    );
  } else {
    return null;
  }
}
