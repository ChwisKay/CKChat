import { useState } from "preact";

// create a state store where messages are stored for display. addMessage() and removeMessage() are the hooks
const useChatStore = () => {
  const [messages, setMessages] = useState([]);
  const [chatVisible, setChatVisible] = useState(true);

  const addMessage = (data) => {
    setMessages((prevState) => [...prevState, data]);
  };

  const removeMessage = (id) => {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id)
    );
  };
  const toggleChat = (time) => {
    setChatVisible((prevState) => !prevState);
    if (time) {
      setTimeout(() => {
        setChatVisible((prevState) => !prevState);
      }, time);
    }
  };
  return { messages, addMessage, removeMessage, chatVisible, toggleChat };
};

export default useChatStore;
