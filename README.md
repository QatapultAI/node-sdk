# Getting Started

To get started with Qatapult, you'll need an API token, which you can get from the [Qatapult](https://qatapult.ai) website.

Next the client library

```sh
# with npm
npm install @qatapult/client
# with yarn
yarn add @qatapult/client
```

## Usage

Use the API token from your account page to initialise the client.

```javascript
const { QuizClient } = require("@qatapult/client").QuizClient;
// Or, with ES6 imports...
import { QuizClient } from "@qatapult/client";

const quizzes = new QuizClient("{API_TOKEN}");
```

### Generating a quiz

There are multiple ways to generate a quiz.

- From Text

```javascript
const reqId = quizzes.generateFromText(
  `The earliest forms of English, a set of Anglo-Frisian dialects brought to Great Britain by Anglo Saxon invaders in the fifth century, are called Old English. Beowulf is the most famous work in Old English, and has achieved national epic status in England, despite being set in Scandinavia. However, following the Norman conquest of England in 1066, the written form of the Anglo-Saxon language became less common.`
);
```

- From a Web Article

```javascript
const reqId = quizzes.generateFromArticle(
  `https://en.wikipedia.org/wiki/Alan_Turing`
);
```

- From a YouTube video

```javascript
const reqId = quizzes.generateFromVideo();
```

- From a File

```javascript
const reqId = quizzes.generateFromFile(file);
```

## Web Sockets (socket.io)

If you have a front end client that is capable of receiving websocket events, you can initialise your frontend socket.io client to listen to `http://api.qatapult.ai`. You must then pass your socketId to the quizzes client to receive questions as they're being generated. This is useful if you are generating from large inputs at a time.

```javascript
const articleLink = `https://en.wikipedia.org/wiki/Alan_Turing`;
const reqId = quizzes.generateFromArticle(articleLink, socketId);
```
