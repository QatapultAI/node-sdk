import Axios, { AxiosInstance } from "axios";
import { hosts } from "./utils/data";
import {
  ArticleGenerationRequest,
  TextGenerationRequest,
  YouTubeGenerationRequest,
} from "./utils/types";

export class QuizClient {
  // Private axios instance for internal requests
  private axios: AxiosInstance;

  /**
   * @param  {string} token Your API token that you can retrieve from your account page (https://qatapult.ai/account/keys)
   */
  constructor(token: string) {
    this.axios = Axios;
    this.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  async generateFromText(text: string, socketId?: string): Promise<string> {
    const body: TextGenerationRequest = {
      text,
    };
    if (socketId) body.socketId = socketId;

    const r = await this.axios.post(`${hosts.leap}/api/generate/text`, body);
    return r.data.requestId;
  }

  async generateFromArticle(url: string, socketId?: string): Promise<string> {
    const body: ArticleGenerationRequest = {
      url,
    };
    if (socketId) body.socketId = socketId;

    const r = await this.axios.post(`${hosts.leap}/api/generate/article`, body);
    return r.data.requestId;
  }

  async generateFromFile(file: File, socketId?: string): Promise<string> {
    const form = new FormData();
    form.append("file", file);
    if (socketId) form.append("socketId", socketId);

    const r = await this.axios.post(`${hosts.leap}/api/generate/file`, form, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    return r.data.requestId;
  }
  /**
   * @param  {string} vid A valid YouTube video id, length must be 11 characters
   * @returns Promise resolving string
   */
  async generateFromYouTube(vid: string, socketId?: string): Promise<string> {
    if (vid.length !== 11) {
      throw Error("Video ID length must be 11 characters");
    }

    const body: YouTubeGenerationRequest = {
      vid: vid,
    };
    if (socketId) body.socketId = socketId;

    const r = await this.axios.post(`${hosts.leap}/api/generate/youtube`, body);
    return r.data.requestId;
  }

  /**
   * @param  {string} quizId Quiz ID you received on generation
   */
  async getQuiz(quizId: string, socketId?: string) {
    const r = await this.axios.get(`${hosts.leap}/api/quiz`, {
      params: { quiz_id: quizId },
    });
    return r.data;
  }
}
