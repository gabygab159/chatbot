import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import "./App.css";
import Prompt from "./components/prompt/Prompt";
import Responses from "./components/response/Responses";

export type BotResponse = {
  name: string;
  response: string;
};

function App() {
  const [prompts, setPrompts] = useState<Array<string>>([]);
  const [responses, setResponses] = useState<Array<BotResponse>>([]);

  return (
    <>
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="flex-start"
        direction="column"
        p={10}
      >
        <div className="App">
          <h1 className="sassyHeader">Sassy Yelperbot</h1>
        </div>
        <Prompt
          setPrompts={setPrompts}
          prompts={prompts}
          setResponses={setResponses}
          responses={responses}
        />
        <Responses
          prompts={prompts}
          responses={responses}
          setResponses={setResponses}
        />
      </Flex>
    </>
  );
}

export default App;
