import { Button, Input } from "@chakra-ui/react";

export default function Prompt() {
  return (
    <div>
      <label htmlFor="prompt">Prompt</label>
      <Input placeholder="Ask chatbot something..."></Input>
      <Button>Submit</Button>
    </div>
  );
}
