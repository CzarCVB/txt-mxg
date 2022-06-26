import { useState, useEffect } from "react";
import "./Chat.css";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";

let socket; //empty variable, to be used when we get connection

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://txt-mxg.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    //join can be any string that we need to verify on backend, the object is the payload we send to the backend
    //error object is received from back-end side
    return () => {
      socket.emit("disconnect"); //disconnects the channel
      socket.off(); //turn this one instance of client-socket off
    };
  }, [ENDPOINT, location.search]);

  //this useEffect is for handling messages
  useEffect(() => {
    //adding new messages by admin or user to the array
    socket.on("message", (message) => {
      setMessages((prevState) => [...prevState, message]);
    });

    socket.on('roomData', ({users}) => {
        setUsers(users);
    })
  }, []);

  const sendMessage = (event) =>{
    event.preventDefault();

    if (message){
        socket.emit("sendMessage", message, () =>{
            setMessage("");
        })
    }
  }
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room = {room} />
        <Messages messages = {messages} name = {name}/>
        <Input message = {message} setMessage = {setMessage} sendMessage = {sendMessage}/>
      </div>
      <TextContainer users = {users} name = {name}/>
    </div>
  );
};
export default Chat;
