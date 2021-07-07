import express from "express";
const multer = require("multer");
const upload = multer();
import { QuizClient } from "@qatapult/client";

const router = express.Router();
const quizzes = new QuizClient(
  // This key is fake
  "438254d55f006536a8c48080c6419baa682c1d01e49e77707d787c589302fa9e"
);

router.post("/generate-quiz", async (req: any, res: any) => {
  console.log({ body: req.body });
  const requestId = await quizzes.generateFromArticle(
    req.body.url,
    req.body.socketId
  );

  res.status(200).json({ ok: true, requestId });
});

router.post("/generate-quiz-text", async (req: any, res: any) => {
  console.log(req.body);
  const requestId = await quizzes.generateFromText(
    req.body.url,
    req.body.socketId
  );

  res.status(200).json({ ok: true, requestId });
});

router.post("/generate-quiz-yt", async (req: any, res: any) => {
  console.log({ body: req.body });
  const requestId = await quizzes.generateFromYouTube(
    req.body.url,
    req.body.socketId
  );

  res.status(200).json({ ok: true, requestId });
});

router.post(
  "/generate-quiz-file",
  upload.single("file"),
  async (req: any, res: any) => {
    console.log(req.file, typeof req.file);
    const requestId = await quizzes.generateFromFile(
      req.file,
      req.body.socketId
    );

    res.status(200).json({ ok: true, requestId });
  }
);

router.post("/completed-quiz", async (req, res) => {
  if (!req.body.ok) {
    console.log(`Our quiz wasn't generated because\n${req.body.reason}`);
    res.status(400).json(req.body);
    return;
  }
  const quiz = req.body.quiz;
  console.log({ quiz });
  res.status(200).json({ quiz });
});

export default router;
