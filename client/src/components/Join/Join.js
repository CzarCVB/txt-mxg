import { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const nameChangeHandler = (event) => setName(event.target.value);
  const roomChangeHandler = (event) => setRoom(event.target.value);

  const clickHandler = (event) =>
    !name || !room ? event.preventDefault() : null;

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={roomChangeHandler}
          />
        </div>
        <Link onClick={clickHandler} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">
            Sign In!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
