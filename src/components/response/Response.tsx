export default function Response() {
  return (
    <div>
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
