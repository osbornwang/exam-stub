import { Injectable } from '@nestjs/common';
import {
  StatusCode,
  Examination,
  Quizze,
  StartExamination,
  AnswerSheet,
} from './model';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getQuizzesByPageId(id: string): Quizze[] {
    const quizze = {
      id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl1',
      score: 5,
    } as Quizze;
    const scores = [5, 10, 20, 15, 20, 30];
    return scores.map(score => {
      return Object.assign(quizze, {
        score,
      });
    });
  }

  createExaminations(createExamParams: Examination): StatusCode {
    const { paperId, teacherId, duration } = createExamParams;
    const quizzes = this.getQuizzesByPageId(paperId);
    if (
      new RegExp('[a-zA-Z-0-9]{32}').test(paperId) &&
      new RegExp('[a-zA-Z-0-9]{32}').test(teacherId) &&
      duration > 0 &&
      duration < 1000 &&
      quizzes.length > 0
    ) {
      return { status: 201 };
    } else {
      return { status: 400 };
    }
  }

  startExam(startExaminationParams: StartExamination): StatusCode {
    const { examinationId, studentId } = startExaminationParams;
    if (
      new RegExp('[a-zA-Z-0-9]{32}').test(examinationId) &&
      new RegExp('[a-zA-Z-0-9]{32}').test(studentId)
    ) {
      return { status: 201 };
    } else {
      return { status: 400 };
    }
  }

  answerExam(answerSheetParams: AnswerSheet): StatusCode {
    const { examinationId, studentId, answers } = answerSheetParams;
    const answerSheetList = [
      {
        id: '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        examinationId: '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        studentId: '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        answers: [
          '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
          '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        ],
        startTime: '2020-07-06 08:20:10',
        endTime: '2020-07-06 10:20:10',
      },
      {
        id: 'lokfu1-lokfu-jr874j3-h8d9j4-hor82kd7',
        examinationId: '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        studentId: '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        answers: [
          '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
          '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        ],
        startTime: '2020-07-05 08:20:10',
        endTime: '2020-07-05 10:20:10',
      },
    ];

    const answerSheet = answerSheetList.find(
      answerSheet => answerSheet.id === examinationId,
    );

    if (
      new RegExp('[a-zA-Z-0-9]{32}').test(examinationId) &&
      new RegExp('[a-zA-Z-0-9]{32}').test(studentId) &&
      answerSheet &&
      new Date(answerSheet.startTime).getTime() > Date.now() &&
      new Date(answerSheet.endTime).getTime() < Date.now()
    ) {
      return { status: 201 };
    } else {
      return { status: 400 };
    }
  }
}
