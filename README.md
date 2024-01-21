# EasyChatbot

EasyChatbot is an simple chatbot that can be integrated into any webpage easily.
So far EasyChatbot only support google gemini api, more api support will come soon.

## Table of Contents

- [Demo](#Demo)
- [Usage](#usage)
- [Development](#development)

## Demo
Pleae visit this link to see the demo page


## Usage

To use EasyChatbot, you can either:

1. Import the component from the package directly:

```javascript
import { Chatbot } from "../chatbot/main";
...
<Chatbot chatbotType='gemini' apiKey=''/>  // you need to enter your apiKey here
```

2. Use the build output js/css file directly

```html
<script src="./dist/easychatbot.umd.cjs"></script>
<link rel="stylesheet" href="./dist/style.css" />
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
You will be able to start develop!

