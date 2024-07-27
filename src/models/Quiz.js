// models/Quiz.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const questionSchema = new Schema({
  id: Number,
  question: String,
  answers: [String],
  correctAnswer: String,
});

const quizSchema = new Schema({
  totalQuestions: Number,
  questions: [questionSchema],
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the current date and time
  },
});

export const Quiz = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);
