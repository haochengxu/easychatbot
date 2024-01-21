import React from 'react';
import ReactDOM from 'react-dom';
import Chatbot from './Chatbot';
import { ChatbotProps } from './types';

const MyChatbot: React.FC<ChatbotProps> = (props) => {
  return <Chatbot {...props} />;
}

const init = (element: Element, props: ChatbotProps) => {
  ReactDOM.render(<Chatbot {...props} />, element);
}

export { MyChatbot as Chatbot, init };