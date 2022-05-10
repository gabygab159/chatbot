import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Prompt() {
  const [prompt, setPrompt] = useState("");
  const handleChange = (e: any) => {
    setPrompt(e.target.value);
  };

  return (
    <div>
      <label htmlFor="prompt">Prompt</label>
      <Input placeholder="Ask chatbot something..." value={prompt} onChange={handleChange}></Input>
      <Button>Submit</Button>
    </div>
  );
}
