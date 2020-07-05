export interface StatusCode {
  status: number;
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
  duration: number;
}

export interface StartExamination {
  examinationId: string;
  studentId: string;
}

export interface AnswerSheet {
  id?: string;
  examinationId: string;
  studentId: string;
  answers: string[];
  startTime?: string;
  endTime?: string;
}
