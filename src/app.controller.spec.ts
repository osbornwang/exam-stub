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
        120,
      );
      expect(result.status).toBe(201);
    });

    it('start Answer Examinations should return {status:201}', () => {
      const result = appController.startAnswerExaminations(
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
      );
      expect(result.status).toBe(201);
    });

    it('answer Examinations should return {status:201}', () => {
      const result = appController.startAnswerExaminations(
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
      );
      expect(result.status).toBe(201);
    });
    it('answer Examinations should return {status:400}', () => {
      const result = appController.answerExaminations(
        'lokfu1-lokfu-jr874j3-h8d9j4-hor82kd7',
        [
          '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
          '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
        ],
        '9idk4-lokfu-jr874j3-h8d9j4-hor82kd7',
      );
      expect(result.status).toBe(400);
    });
  });
});
