// test.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Test } from './test.model';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(Test)
    private testModel: typeof Test,
  ) {}

  async create(testData: { quizName: string }): Promise<Test> {
    try {
    return this.testModel.create(testData);
    } catch (error) {
      console.log("something bad happened", error);
      
    }
  }

  async getTests() {
    try {
      return this.testModel.findAll();
    } catch (error) {
      console.log("something bad happened", error);
    }
    return this.testModel.findAll();
  }

  async getTest(testId) {
    try {
      return this.testModel.findOne({
        where:{id: testId}
      })
    } catch (error) {
      console.log("something bad happened", error);
    }
  }
}
