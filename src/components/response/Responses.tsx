type Props = {
  prompts: string[];
};

export default function Responses(props: Props) {
  return (
    <div>
      <h1>Responses</h1>
      <div>
        <label htmlFor="response">Prompt</label>
        <p>This is what was asked</p>
      </div>
      <hr></hr>
      <div>
        <label htmlFor="response">Response: </label>
        <p>This is what the chatbot said</p>
      </div>
    </div>
  );
}
