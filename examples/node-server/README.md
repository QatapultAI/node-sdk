# Node Server Example

This example requires the [example frontend server](https://github.com/QatapultAI/node-sdk) to be running provides a primer on how to set up your server to interact with the Qatapult API. Some pre-requisites are in order.

## Pre-requisites

You need an account with [Qatapult](https://qatapult.ai). You can sign up and get your API key from your [dashboard](https://qatapult.ai/settings/).

We're assuming you're comfortable with the basics of writing servers in Node.js with TypeScript. If you're not comfortable with TypeScript, don't worry, we make minimal use of TypeScript features in this example. You can change the extension to `.js` and run it in pure JS if you would like.

Though the server doesn't make any use of TypeScript features, the Qatapult API has first class TypeScript support, you can get code completion and type hints with any editor that supports TypeScript.

## Set Up

Install dependencies for the server

```sh
# with npm
npm install

# or if you're using yarn...
yarn
```

Initialise the Qatapult client in `src/root.ts` with your own API key. We have a fake key hardcoded but you would probably want this loaded from an environment variable.

## Routes

The server has two paths

- `/generate-quiz`
- `/completed-quiz`

`/generate-quiz` is a route that you would use to request a quiz from Qatapult. You can use the Qatapult client to create the requests to the Qatapult API. You will receive a `requestId` in return that identifies your quiz generation request. You can use this to retrieve the quiz post-completion in case your server was not able to handle the completion event.

`/completed-quiz` is the webhook that your quiz will be delivered to post-completion.

## Web Sockets

If your frontend client supports using `socket.io`, you can pass your client's socket ID with the quiz request to stream the questions as they're generated to your client. This server works in tandem with the [frontend-example](https://github.com/QatapultAI/node-sdk).
