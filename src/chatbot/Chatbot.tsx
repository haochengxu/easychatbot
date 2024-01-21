import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatbotProps, Message, ChatbotType } from "./types";
import "./chatbot.css";

function Chatbot(props: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello, nice to meet you. I am EasyChatbot. You can talk with me freely",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [chatModel, setChatModel] = useState<any>(null);

  const genAI = new GoogleGenerativeAI(props.apiKey);

  async function initChatbot(chatbotType: ChatbotType) {
    let chat;
    if (chatbotType === "gemini") {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      chat = model.startChat({
        history: [
          {
            role: "user",
            parts: "Hello, nice to meet you. Who are you?",
          },
          {
            role: "model",
            parts:
              "Great to meet you. I am a nice bot named EasyChatbot that loves to chat and help you.",
          },
        ],
      });
    } else {
      chat = {
        sendMessage: async (message: string) => {
          return {
            response: {
              text: () => `You said: ${message}`,
            },
          };
        },
      };
    }
    setChatModel(chat);
  }

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

  /**
   * Scrolls the last message into view with smooth behavior.
   * @param messages - The array of messages.
   */
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    initChatbot(props.chatbotType);
  }, []);

  return (
    <div className="chatbot-container">
      <div className="chatbot-button-container">
        {!isOpen && (
          <div className="chatbot-button-container">
            <img
              onClick={toggleChat}
              src="https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/DSjjJVtWgP_jxGWP.png"
              alt="Chat Icon"
            />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="chatbot-viewer">
          <div className="chat-viewer">
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
                  {message.sender === "bot" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="bot-avatar"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="9" cy="9" r="1"></circle>
                      <circle cx="15" cy="9" r="1"></circle>
                      <polyline points="8 13 12 17 16 13"></polyline>
                    </svg>
                  )}
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
        </div>
      )}
    </div>
  );
}

export default Chatbot;
