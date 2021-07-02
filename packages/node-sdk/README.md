# Getting Started

_Visit the documentation site for the nitty gritty details_

This library allows easy interaction with the Qatapult API. You'll need an API token which you can obtain from your [settings page](https://qatapult.ai/settings). You can pass the `dev` parameter in all of your requests (more on this) to test your integrations without getting charged. This won't generate any quizzes and will always give you the same quiz.

You should also configure your webhook URL to a publicly available URL on your account page. This is so we can send you your quizzes after completion. Quiz generation can take any amount of time from 1 minute to 10s of minutes depending on the size of your input.

<u>**TypeScript Support**</u>

We provide type declarations for almost all methods and parameters available in the library which makes your life a lot easier when working with the library in any editor that supports TypeScript.

## Initialize

Install the library with either npm or yarn.

```sh
# NPM
npm i --save @qatapult/client
# Yarn
yarn add @qatapult/client
```

Import it and initialize the client with your token.

```javascript
const QuizClient = require("@qatapult/client").QuizClient;
// Or if you are using ES6 import/exports
import { QuizClient } from "@qatapult/client";

const quizzes = new QuizClient("API_TOKEN");
```

## Usage

The client was created with asynchronicity in mind so you can use async/await with almost all methods on the client.

### Quiz Generation

You can queue a quiz generation request with the client.

```javascript
const quizId = await quizzes.generateFromText(text);
```

The `quizId` generated here is an identifier for your quiz. But the quiz **does not exist yet**, you will receive a request on your webhook URL to handle the completion of the quiz generation.

### Retreiving Quizzes

If you need the original quiz again after you already handled the completion request (or if you failed to), you can retrieve it with the `quizId`.

```javascript
const quiz = await quizzes.getQuiz(quizId);
```
