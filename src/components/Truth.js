import React from "react";

export default function Truth(props) {
  return (
    /* Afficher les paragraphes sous condition qu'une prop existe avec { props.setup && 
    <p className="bold">{props.setup}</p>} 
    ou 
    <p className="bold" style={{dislay; props.setup ? "block" : "none" }}>{props.setup}</p>*/

    <>
      <li className="question">
        <p className="bold">{props.setup}</p>
        <p className="italic reponse">〉{props.punchline}</p>
      </li>
      <hr />
    </>
  );
}
