# Frontend Client Example

This example requires the [example backend server](https://github.com/QatapultAI) to be running to make requests to Qatapult.

## Setup

Install dependencies with your package manager

```sh
# With npm
npm install
# or with yarn...
yarn
```

Start the server

```sh
# npm
npm start
# yarn
yarn start
```

## Web Sockets

This server uses web sockets (using the socket.io library) to stream questions as they're being generated. The event that emits individual questions is `data`. You need to use the http endpoint of the Qatapult API `http://api.qatapult.ai` to connect to Qatapult's socket server.

You also need to provide your socket ID (from socket.io) to your backend server that makes the request for quiz generation to be able to tell Qatapult which socket to send the data to. You should never make quiz generation requests to Qatapult directly from the frontend, for security reasons (you'd expose your API key).
