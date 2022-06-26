import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users, name}) => {
  let user_name = name.trim()
  return (
    <div className="textContainer">
      <div>
        <h1>
          Chat Application{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        <h2>
          Created with React, Express, Node and Socket.IO{" "}
          <span role="img" aria-label="emoji">
            ❤️
          </span>
        </h2>
        <h2>
          Try it out right now!{" "}
          <span role="img" aria-label="emoji">
            ⬅️
          </span>
        </h2>
      </div>
      {users ? (
        <div>
          <h1>You are currently in room with:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => {
                let d_name = name;
                if (name === user_name){
                    d_name = 'You';
                }
                
                return (
                  <div key={name} className="activeItem">
                    {d_name}
                    <img alt="Online Icon" src={onlineIcon} />
                  </div>
                );
              })}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TextContainer;
