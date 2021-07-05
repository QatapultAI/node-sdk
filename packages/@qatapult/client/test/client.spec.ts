import { assert } from "chai";
import { QuizClient } from "../src";
import { testQuiz } from "./data";

describe("ClientTests", () => {
  const client = new QuizClient(
    "0bc7c59ee4303f55558f9a7cdf1ab0f887e537ddfabc3101e69abd9858eb79ce"
  );
  it("should return the test quiz for `getQuiz`", async () => {
    const resQuiz = await client.getQuiz("0wZATXkB21L_We4I37_i");
    assert.deepEqual(testQuiz.quiz, resQuiz);
  });
});
