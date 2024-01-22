# EasyChatbot

EasyChatbot is a simple, responsive chatbot that can be integrated into any webpage easily.
So far EasyChatbot only support Google Gemini API, more API support will come soon.

## Table of Contents

- [Demo](#Demo)
- [Usage](#usage)
- [Development](#development)

## Demo
Please visit [this link](https://codepen.io/haochengxu/pen/JjzJVgE) to see the demo page

## Usage

To use EasyChatbot, you can choose the following two ways:

1. Import the component from the package directly(will pulish to npm):

```javascript
import { Chatbot } from "../chatbot/main";
...
<Chatbot chatbotType='gemini' apiKey=''/>  // you need to enter your apiKey here
```

2. Use the build output js/css file directly

```html
<script src="./dist/main.[hash].js"></script>
<link rel="stylesheet" href="./dist/asets/style.assets.[hash].css" />
<script>
  const element = document.getElementById("root");
  EasyChatbot.init(element, {
    chatbotType: "gemini",
    apiKey: "", // you need to enter your apiKey here
  });
</script>
```

## Development
To develop EasyChatbot, just clone this repo and run following commands in terminal:
``` javascript
npm install
npm run dev
```
You will be able to see the demo page and start development!

