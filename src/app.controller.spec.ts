import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('create Examinations should return {status:201}', () => {
      const result = appController.createExaminations(
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        [
          { id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl1', score: 5 },
          {
            id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl2',
            score: 10,
          },
          {
            id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl3',
            score: 20,
          },
          {
            id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl4',
            score: 15,
          },
          {
            id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl5',
            score: 20,
          },
          {
            id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl6',
            score: 30,
          },
        ],
        120,
      );
      expect(result.status).toBe(201);
    });

    it('start Answer Examinations should return {status:201}', () => {
      const result = appController.startAnswerExaminations(
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        120,
        [
          { id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl1', score: 5 },
          {
            id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl2',
            score: 10,
          },
          {
            id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl3',
            score: 20,
          },
          {
            id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl4',
            score: 15,
          },
          {
            id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl5',
            score: 20,
          },
          {
            id: '8jk4l-k0d9ie7-4jk89l-t88ijj6-h8ijsl6',
            score: 30,
          },
        ],
      );
      expect(result.status).toBe(201);
    });

    it('answer Examinations time expire should return {status:400}', () => {
      const result = appController.answerExaminations(
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        ['answer 1', 'answer 2', 'answer 3'],
        new Date(Date.now() - 1000 * 60 * 60 * 121).toDateString(),
        new Date().toDateString(),
      );
      expect(result.status).toBe(400);
    });

    it('answer Examinations should return {status:201}', () => {
      const result = appController.answerExaminations(
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        ['answer 1', 'answer 2', 'answer 3'],
        new Date(Date.now() - 1000 * 60 * 60 * 45).toDateString(),
        new Date().toDateString(),
      );
      expect(result.status).toBe(201);
    });
  });
});
