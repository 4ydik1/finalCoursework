import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import "dotenv";
import {Test} from "./quiz/test.model";
import { TestModule } from './quiz/test.module';



@Module({
  imports: [
      TestModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: Number('5432'),
      username: 'postgres',
      password: '1234',
      database: 'courserwork',
      models: [Test],
      autoLoadModels: true,
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
