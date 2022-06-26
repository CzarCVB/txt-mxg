import "./Input.css";

const Input = ({message, setMessage, sendMessage}) => {

  const submitHandler = (event) =>sendMessage(event);
  return (
    <form className="form">
      <input
        className="input"
        placeholder="Type a message and press send..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={submitHandler}>send</button>
    </form>
  );
};

export default Input;
