import React from "react";
import Truth from "./Truth";
import truthData from "../datas/truthData";

export default function TruthContent() {
  const truthElements = truthData.map((truth) => {
    return (
      <Truth key={truth.id} setup={truth.setup} punchline={truth.punchline} />
    );
  });
  return (
    <>
      <h1>Vérités inconnues</h1>
      <h2>Vérités universelles unanimement peu connues</h2>
      {truthElements}
    </>
  );
}
