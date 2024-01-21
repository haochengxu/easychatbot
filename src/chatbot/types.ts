export interface ChatbotProps {
  chatbotType: ChatbotType;
  apiKey: string;
}

export interface Message {
  text: string;
  sender: "user" | "bot";
}

export enum ChatbotType {
  Gemini = 'gemini',
  Local = 'local'
}