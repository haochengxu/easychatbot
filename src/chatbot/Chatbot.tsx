import React, { useState, useEffect, useRef } from "react";
import { ChatbotProps, Message } from "./types";
import { initChatbot } from "./utils";
import "./chatbot.css";

function Chatbot(props: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello, nice to meet you. I am EasyChatbot. You can talk with me freely.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [chatModel, setChatModel] = useState<any>(null);

  // Handles sending a message in the chatbot.
  const handleSend = async () => {
    if (input) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" },
      ]);
      setInput("");
      setIsLoading(true);
      try {
        const result = await chatModel.sendMessage(input);
        const response = await result.response;
        const text = response.text();
        setMessages((prevMessages) => [
          ...prevMessages,
          { text, sender: "bot" },
        ]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  //Scrolls the last message into view with smooth behavior.
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    setChatModel(initChatbot(props.chatbotType, props.apiKey));
  }, []);

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <div className="start-img-container" onClick={toggleChat}>
          <img
            src="https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/DSjjJVtWgP_jxGWP.png"
            alt="Chat Icon"
          />
        </div>
      )}
      {isOpen && (
        <div className="chatbot-viewer">
          <p className="chatbot-header">
            Conversation with EasyChatbot{" "}
            <span className="close-icon" onClick={toggleChat}>
              &times;
            </span>
          </p>
          <div className="message-list">
            {messages.map((message, index) => (
              <div
                className="message-item"
                key={index}
                ref={index === messages.length - 1 ? lastMessageRef : null}
              >
                <strong>
                  {message.sender === "bot" ? "EasyChatbot" : "You"}:
                </strong>
                <br />
                <p>{message.text}</p>
              </div>
            ))}
            {isLoading && (
              <div className="loading">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
            )}{" "}
          </div>
          <div className="chat-input-container">
            <input
              placeholder="Message EasyChatbot..."
              value={input}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
