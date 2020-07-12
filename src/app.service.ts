import { Injectable } from '@nestjs/common';
import {
  StatusCode,
  Examination,
  Quizze,
  StartExamination,
  AnswerSheetParams,
} from './model';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createExaminations(createExamParams: Examination): StatusCode {
    const { paperId, teacherId, duration, quizzes } = createExamParams;
    if (
      new RegExp('[a-zA-Z-0-9]{32}').test(paperId) &&
      new RegExp('[a-zA-Z-0-9]{32}').test(teacherId) &&
      duration > 0 &&
      duration < 1000 &&
      quizzes.length > 0 &&
      quizzes.every(quizze => new RegExp('[a-zA-Z-0-9]{32}').test(quizze.id)) &&
      quizzes.reduce((total, num) => {
        return total + num.score;
      }, 0) === 100
    ) {
      return { status: 201 };
    } else {
      return { status: 400 };
    }
  }

  startExam(startExaminationParams: StartExamination): StatusCode {
    const {
      examinationId,
      studentId,
      teacherId,
      paperId,
      duration,
      quizzes,
    } = startExaminationParams;
    if (
      new RegExp('[a-zA-Z-0-9]{32}').test(examinationId) &&
      new RegExp('[a-zA-Z-0-9]{32}').test(studentId) &&
      new RegExp('[a-zA-Z-0-9]{32}').test(teacherId) &&
      new RegExp('[a-zA-Z-0-9]{32}').test(paperId) &&
      duration > 0 &&
      duration < 1000 &&
      quizzes &&
      quizzes.length > 0 &&
      quizzes.every(quizze => new RegExp('[a-zA-Z-0-9]{32}').test(quizze.id)) &&
      quizzes.reduce((total, num) => {
        return total + num.score;
      }, 0) === 100
    ) {
      return { status: 201 };
    } else {
      return { status: 400 };
    }
  }

  answerExam(answerSheetParams: AnswerSheetParams): StatusCode {
    const {
      examinationId,
      answerId,
      studentId,
      answers,
      startTime,
      submitTime,
    } = answerSheetParams;
    if (
      new RegExp('[a-zA-Z-0-9]{32}').test(examinationId) &&
      new RegExp('[a-zA-Z-0-9]{32}').test(answerId) &&
      new RegExp('[a-zA-Z-0-9]{32}').test(studentId) &&
      answers &&
      answers.length > 0 &&
      new Date(startTime).getTime() < new Date(submitTime).getTime() &&
      new Date(submitTime).getTime() <
        new Date(startTime).getTime() + 1000 * 60 * 60 * 120
    ) {
      return { status: 201 };
    } else {
      return { status: 400 };
    }
  }
}
