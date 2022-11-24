import React from "react";
import Types from "./Types";

function Type() {
  const [state] = {
    title: "",
    bio: "",
    summary: "",
  };

  return (
    <>
      <Types title={state.title} bio={state.bio} summary={state.summary} />
    </>
  );
}

export default Type;
