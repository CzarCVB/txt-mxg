import "./Message.css";
import ReactEmoji from 'react-emoji';

const Message = ({ message, name }) => {
  let isSentByCurrentUser = false;
  const name_trim = name.trim();
  if (message.user === name_trim) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    //message is sent by current user
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{name}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(message.text)}</p>
      </div>
    </div>
  ) : (
    //message is not sent by current user
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(message.text)}</p>
      </div>
      <p className="sentText pl-10">{message.user}</p>
    </div>
  );
};

export default Message;
