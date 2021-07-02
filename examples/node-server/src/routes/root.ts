import express from "express";
import { QuizClient } from "@qatapult/client";

const router = express.Router();
const quizzes = new QuizClient(
  // This key is fake
  "c33380e02dfe259a9310a3861705b6481950b285e2f41b6b87b3968d6c40F361"
);

router.post("/generate-quiz", async (req, res) => {
  console.log({ body: req.body });
  const requestId = await quizzes.generateFromArticle(
    req.body.url,
    req.body.socketId
  );

  res.status(200).json({ ok: true, requestId });
});

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
