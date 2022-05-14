import { Alert, AlertIcon, Button, FormControl, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { BotResponse } from "../../App";

const configuration = new Configuration({
  organization: "org-fVFydW1NQWFKRHo6PgORBlvY",
  apiKey: process.env.REACT_APP_KEY,
});

const openai = new OpenAIApi(configuration);

type Props = {
  setPrompts: (prompt: string[]) => void;
  prompts: string[];
  setResponses: (responses: BotResponse[]) => void;
  responses: BotResponse[];
};

export default function Prompt(props: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurant, setRestaurant] = useState("");
  const { prompts, setPrompts, setResponses, responses } = props;
  const [isValid, setIsValid] = useState(true);

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompts([e.target.value]);
  };

  const handleRestaurantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurant(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLButtonElement>
  ): Promise<void> => {
    if (restaurant === "" || prompts[0] === "") {
      setIsValid(false);
      return;
    }

    e.preventDefault();
    setIsLoading(true);
    setIsValid(true);
    const response: any = await openai.createCompletion("text-curie-001", {
      prompt:
        `Write a sarcastic and negative restaurant review based on these notes:\n\nName:` +
        `${restaurant}\n${prompts}\n\nReview:`,
      temperature: 0.8,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    const newResponse: BotResponse = {
      name: restaurant,
      response: response.data.choices[0].text,
    };
    setResponses([newResponse, ...responses]);
    setIsLoading(false);
  };

  return (
    <div>
      {!isValid ? (
        <Alert status="error">
          <AlertIcon />
          Please fill out both fields.
        </Alert>
      ) : null}
      <label placeholder="Where did you eat?">Restaurant Name:</label>
      <Input
        value={restaurant}
        onChange={handleRestaurantChange}
        marginY={4}
      ></Input>

      <label htmlFor="prompt">Review</label>
      <Input
        placeholder="How was it? ... be honest"
        value={prompts}
        onChange={handlePromptChange}
        isRequired
        marginY={4}
      ></Input>
      <Button
        isLoading={isLoading}
        type="submit"
        onClick={handleSubmit}
        m={3}
        marginLeft="auto"
      >
        Submit
      </Button>
    </div>
  );
}
