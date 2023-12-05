// create-quiz.dto.ts
import { IsString } from 'class-validator';
import { Type } from 'class-transformer';

class OptionDTO {
    text: string;
    correct: boolean;
  }
  
   class QuestionDTO {
    @IsString()
    title: string;
    @Type(()=> OptionDTO)
    options: OptionDTO[];
  }
  
  export class QuizDto {
    quizName:string;
    @Type(()=> QuestionDTO)
    questions:QuestionDTO[];
  }