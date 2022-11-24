import React, { useState, useEffect } from "react";
import Axios from "axios";

const Test = () => {
  const [counter, setCounter] = useState(0);

  //useEffect hook
  useEffect(() => {
    Axios.get("https://randomuser.me/api")
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <h1>{counter}</h1>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        CLICK ME!
      </button>
    </div>
  );
};

export default Test;
