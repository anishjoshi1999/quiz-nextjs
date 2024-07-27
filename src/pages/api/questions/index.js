import dbConnect from "@/lib/dbConnect";
import { Quiz } from "@/models/Quiz";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        // Fetch the latest quiz based on createdAt field
        const latestQuiz = await Quiz.findOne({}).sort({ createdAt: -1 });
        if (latestQuiz) {
          res.status(200).json({ success: true, data: latestQuiz });
        } else {
          res.status(404).json({ success: false, message: "No quiz found" });
        }
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: "Error fetching quiz" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
