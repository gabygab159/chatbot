import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Prompt() {
  const [prompt, setPrompt] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log(prompt);
  };

  return (
    <div>
      <label htmlFor="prompt">Prompt</label>
      <Input
        placeholder="Ask chatbot something..."
        value={prompt}
        onChange={handleChange}
      ></Input>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
