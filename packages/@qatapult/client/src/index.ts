import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import { FileHandle } from "fs/promises";
import Axios, { AxiosInstance } from "axios";
import { hosts } from "./utils/data";
import {
  ArticleGenerationRequest,
  TextGenerationRequest,
  YouTubeGenerationRequest,
} from "./utils/types";
import FormData from "form-data";

export class QuizClient {
  // Private axios instance for internal requests
  private axios!: AxiosInstance;

  /**
   * @param  {string} apiKey Your API token that you can retrieve from your account page (https://qatapult.ai/account/keys)
   */
  constructor(apiKey: string) {
    // Validate token to make sure requests are valid before hand
    this.validateKey(apiKey);
  }

  async validateKey(key: string) {
    const r = await Axios.post(`${hosts.leap}/api/users/validate-key`, { key });
    const ok = r.status === 200 && r.data.ok;
    if (ok) {
      this.axios = Axios;
      this.axios.defaults.headers.common["Authorization"] = `Bearer ${key}`;
    } else {
      console.log(`Invalid Qatapult API key`);
      process.exit(1);
    }
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

  async generateFromFile(filePath: string, socketId?: string): Promise<string> {
    const form = new FormData();
    if (!filePath) throw new Error(`Invalid file path -> ${filePath}`);
    form.append("file", fs.createReadStream(filePath));
    if (socketId) form.append("socketId", socketId);

    console.log(filePath);

    const r = await this.axios.post(`${hosts.leap}/api/generate/file`, form, {
      headers: form.getHeaders(),
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

export function hello() {
  return "hello";
}
