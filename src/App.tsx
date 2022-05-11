import React, { useState } from "react";
import "./App.css";
import Prompt from "./components/prompt/Prompt";
import Response from "./components/response/Responses";

function App() {
  const [prompts, setPrompts] = useState<Array<string>>([]);

  return (
    <>
      <div className="App">
        <h1>Chatbot</h1>
      </div>
      <Prompt setPrompts={setPrompts} prompts={prompts} />
      <Response prompts={prompts} />
    </>
  );
}

export default App;
