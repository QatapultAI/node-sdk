import axios from "axios";
import React from "react";
import socketClient, { Socket } from "socket.io-client";

// const LEAP = "http://leap-env.eba-cxnbbxmn.us-east-1.elasticbeanstalk.com";
// const LEAP = "http://localhost:8001";
const LEAP = "https://api.qatapult.ai";
const MOCK_SERVER = "http://localhost:8002";

type Props = {};
type State = {
  quiz: any[];
  articleUrl: string;
};
class App extends React.Component<Props, State> {
  socket: Socket;
  constructor(props: any) {
    super(props);

    this.state = {
      quiz: [],
      articleUrl: "",
    };
    this.socket = socketClient(LEAP);
    this.generateQuiz = this.generateQuiz.bind(this);
  }

  componentDidMount() {
    this.socket.on("data", (data) => {
      this.setState((state: any) => ({ quiz: [...state.quiz, data] }));
    });
  }

  handleFile = async (e: any) => {
    let file = new FormData();
    console.log(e.target.files[0]);
    file.append("file", e.target.files[0]);
    file.append("socketId", this.socket.id);
    const r = await axios.post(`${MOCK_SERVER}/generate-quiz-file`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (r.data.ok) {
      alert("File uploaded");
    }
  };

  async generateQuiz() {
    const r = await axios.post(`${MOCK_SERVER}/generate-quiz`, {
      url: this.state.articleUrl,
      socketId: this.socket.id,
    });

    if (r.data.ok) {
      alert("Quiz generation started");
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Quiz Creation Client (WebSockets)</h1>
        <p>Generate a quiz by inputting an article URL</p>
        <input
          type="text"
          value={this.state.articleUrl}
          onChange={(e) =>
            this.setState((state) => ({ ...state, articleUrl: e.target.value }))
          }
        />
        <input type="file" onChange={(e) => this.handleFile(e)} />
        <button onClick={this.generateQuiz}>Create a quiz</button>
        <pre>{JSON.stringify(this.state.quiz!, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
