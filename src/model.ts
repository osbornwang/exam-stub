export interface StatusCode {
  status: number;
}

export interface QuizzeItem {
  id: string;
  score: number;
}
export interface Quizze {
  id?: string;
  teacherId: string;
  question: string;
  score: number;
  referenceAnswer: string;
}

export interface Paper {
  id?: string;
  teacherId: string;
  quizzes: Quizze[];
}

export interface Examination {
  id?: string;
  paperId: string;
  teacherId: string;
  quizzes: QuizzeItem[];
  duration: number;
}

export interface StartExamination {
  examinationId: string;
  studentId: string;
  teacherId: string;
  paperId: string;
  duration: number;
  quizzes: QuizzeItem[];
}

export interface AnswerSheet {
  id?: string;
  examinationId: string;
  studentId: string;
  answers: string[];
  startTime?: string;
  endTime?: string;
}
export interface AnswerSheetParams {
  examinationId: string;
  studentId: string;
  answers: string[];
  answerId: string;
  startTime: string;
  submitTime: string;
}
