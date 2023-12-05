// test.model.ts
import { Column, Model, Table,  DataType } from 'sequelize-typescript';


interface Option {
  text:string;
  correct:boolean;
}

@Table
export class Test extends Model<Test> {
  @Column({type:DataType.STRING, unique:false})
  quizName: string;

  @Column({type:DataType.JSONB})
  questions: Option[];
}
