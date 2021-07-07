import express from "express";
import multer from "multer";
import { QuizClient } from "@qatapult/client";
import fs from "fs";
const upload = multer({ dest: "/tmp/" });
const router = express.Router();
const quizzes = new QuizClient(process.env.QATAPULT_KEY!);

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
    console.log({ file: req.file });
    console.log({ original: req.file?.originalname });
    console.log({ socketId: req.body.socketId });
    const filePath = `${req.file?.path}${req.file?.originalname}`;
    fs.renameSync(req.file?.path!, filePath);
    const requestId = await quizzes.generateFromFile(
      filePath,
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
