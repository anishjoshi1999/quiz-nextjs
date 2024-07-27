// pages/api/upload-quiz.js
import dbConnect from "@/lib/dbConnect";
import { Quiz } from "@/models/Quiz";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      console.log(req.body);
      const quiz = new Quiz(req.body);
      await quiz.save();
      res.status(201).json({ success: true, data: quiz });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else if (req.method === "GET") {
    res.status(200).json({ message: "Admin Upload Form" });
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
