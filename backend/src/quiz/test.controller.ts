// test.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TestService } from './test.service';
import { QuizDto } from './dto/questions.dto';


@Controller('tests')
export class TestController {
  constructor(private testService: TestService) {}

  @Post()
  async createTest(@Body() quizDto:QuizDto) {
    return this.testService.create(quizDto);
  }

  @Get() 
  async getTests() {
    return this.testService.getTests();
  }

  @Get(':id')
  async getTest(@Param('id') testId:number) {
    return this.testService.getTest(testId);
  }
}
