import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../../../public/questions.json";
type question = { question: string; answer: string; id: string };
type Data = question[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(questions);
}

// type Data = {
//   id: number;
//   question: string;
//   answer: string;
// };

// type State = {
//   data: Data[];
// };
