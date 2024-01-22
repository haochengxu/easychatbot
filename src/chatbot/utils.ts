import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatbotType } from "./types";

export async function initChatbot(chatbotType: ChatbotType, apiKey: string) {
  let chat;
  if (chatbotType === "gemini") {
    const genAI = new GoogleGenerativeAI(apiKey);
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
  return chat;
}