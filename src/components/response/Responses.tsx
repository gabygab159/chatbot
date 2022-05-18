import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import { BotResponse } from "../../App";
import "./responses.css";

type Props = {
  prompts: string[];
  responses: BotResponse[];
  setResponses: (responses: BotResponse[]) => void;
};

export default function Responses(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleRemove = (id: number) => {
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
            <Box p={3} className={"response-container"}>
              <div key={index} className={"response-box"}>
                <h3>Bot describes <strong>{response.name}</strong> as :</h3>
                <li className="response">{response.response}</li>
              </div>
              <IconButton icon={<DeleteIcon />} onClick={onOpen} aria-label={"Delete response"} />
            </Box>
            <Modal onClose={onClose} isOpen={isOpen} isCentered motionPreset="scale" closeOnEsc>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Careful now...</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Are you sure you want to delete this response?</p>
                </ModalBody>
                <ModalFooter>
                  <Button variant="ghost" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button variant="ghost" onClick={() => handleRemove(index)}>
                    Delete
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Container>
        );
      })}
    </>
  );
}
