import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
  setPrompts: (prompt: string[]) => void;
  prompts: string[];
};

export default function Prompt(props: Props) {
  const { prompts, setPrompts } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompts([e.target.value]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log(prompts);
  };

  return (
    <div>
      <label htmlFor="prompt">Prompt</label>
      <Input
        placeholder="Ask chatbot something..."
        value={prompts}
        onChange={handleChange}
      ></Input>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
