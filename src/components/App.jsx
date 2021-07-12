import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function newEmoj(emojDeets) {
  return (
    <Emoji
      key={emojDeets.id}
      emoji={emojDeets.emoji}
      name={emojDeets.name}
      meaning={emojDeets.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(newEmoj)}
    </div>
  );
}

export default App;
