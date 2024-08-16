import { h, useState, useEffect } from "preact";
import useChatStore from "../store/chatStore";

const Chat = () => {
  const [renderedMessages, setRenderedMessages] = useState([]);
  const { messages, chatVisible, toggleChat } = useChatStore();

  useEffect(() => {
    // Update the renderedMessages state only with new messages
    const newMessages = messages.filter(
      (message) =>
        !renderedMessages.some((rendered) => rendered.id === message.id)
    );
    if (newMessages.length > 0) {
      setRenderedMessages((prevMessages) => [...prevMessages, ...newMessages]);
    }
  }, [messages]);
  if (!chatVisible) return null;

  return (
    <div>
      {renderedMessages.map((message, index) => (
        <div key={index} className="message">
          <div className="badges">{message.badges}</div>
          <div className="user">{message.user}</div>
          <div className="payload">{message.payload}</div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
