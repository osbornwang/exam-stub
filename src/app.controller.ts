import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { StatusCode, QuizzeItem } from './model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/examinations')
  createExaminations(
    @Body('paperId') paperId: string,
    @Body('teacherId') teacherId: string,
    @Body('quizzes') quizzes: QuizzeItem[],
    @Body('duration') duration: number,
  ): StatusCode {
    return this.appService.createExaminations({
      paperId,
      teacherId,
      quizzes,
      duration,
    });
  }

  @Post('/examinations/:examinationId/answer-sheet')
  startAnswerExaminations(
    @Param('examinationId') examinationId: string,
    @Body('studentId') studentId: string,
    @Body('teacherId') teacherId: string,
    @Body('paperId') paperId: string,
    @Body('duration') duration: number,
    @Body('quizzes') quizzes: QuizzeItem[],
  ): StatusCode {
    return this.appService.startExam({
      examinationId,
      studentId,
      teacherId,
      paperId,
      duration,
      quizzes,
    });
  }

  @Put('/examinations/:examinationId/answer-sheet/:answerId')
  answerExaminations(
    @Param('examinationId') examinationId: string,
    @Param('answerId') answerId: string,
    @Body('studentId') studentId: string,
    @Body('answers') answers: string[],
    @Body('startTime') startTime: string,
    @Body('submitTime') submitTime: string,
  ): StatusCode {
    return this.appService.answerExam({
      examinationId,
      answerId,
      answers,
      studentId,
      startTime,
      submitTime,
    });
  }
}
