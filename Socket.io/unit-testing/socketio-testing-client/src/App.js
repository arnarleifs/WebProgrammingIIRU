import { useEffect, useState } from "react";
import { socket } from "./socket";

export function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  function onSend() {
    socket.emit("message", message);
    setMessage("");
  }

  return (
    <div className="message-container">
      <div className="messages">
        {messages.map((m) => (
          <p key={`${m.timestamp}-${m.message}`}>
            {m.timestamp} - {m.message}
          </p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Enter your message.."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="button" onClick={onSend}>
        Send
      </button>
    </div>
  );
}
