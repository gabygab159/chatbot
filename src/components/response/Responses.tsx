import { Box, Button, Container, Skeleton, SkeletonText } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { BotResponse } from "../../App";
import "./responses.css";

type Props = {
  prompts: string[];
  responses: BotResponse[];
  setResponses: (responses: BotResponse[]) => void;
};

export default function Responses(props: Props) {

  const handleRemove = (id: number) => {
    console.log('deleted response', id);
    const newResponses = props.responses.filter((response, index) => index !== id);
    props.setResponses(newResponses);
  }

  return (
    <>
      {props.responses.map((response, index) => {
        return (
          <Container
            bg="blue.100"
            maxW={"md"}
            m={9}
            boxShadow={"md"}
            rounded={"md"}
          >
            <Box p={3}>
              <div key={index}>
                <h3>Bot describes {response.name} as :</h3>
                <li className="response">{response.response}</li>
              </div>
              <Button leftIcon={<DeleteIcon />} onClick={() => handleRemove(index)} />
            </Box>
          </Container>
        );
      })}
    </>
  );
}
