import { hosts } from "./data";

export type TextGenerationRequest = {
  text: string;
  socketId?: string;
};

export type YouTubeGenerationRequest = {
  vid: string;
  socketId?: string;
};

export type ArticleGenerationRequest = {
  url: string;
  socketId?: string;
};
