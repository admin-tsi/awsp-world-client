export interface Option {
  _id: string;
  option: string;
}

export interface Answer {
  questionId: string;
  answer: number[];
}

export interface QuizSubmission {
  quizzId: string;
  questionAnswers: Answer[];
  microId: string | null;
}

export interface Question {
  _id: string;
  question: string;
  options: Option[];
}

export interface QuizSubmissionResponse {
  decision: string;
  percentage: string;
  quizzScore: number;
  score: number;
}
