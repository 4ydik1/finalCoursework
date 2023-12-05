import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test-builder',
  templateUrl:"createQuestion.component.html",
  styleUrls: ["createQuestion.component.css"],
})
export class CreateQuestionComponent {
  constructor(private http: HttpClient) {}
  disabled: boolean = false;
  baseUrl: string = "http://localhost:3000/tests";
  testName: string = '';
  
  questions: any[] = [{ title: '', options: [
    { text: '', correct: false },
 
    ] }];

  addQuestion() {
    this.questions.push({ title: '', options: [
      { text: '', correct: false },
      ] });
  }

  quiz: Object = {
    quizName: this.testName,
    questions:this.questions
  }
  addOption(questionIndex: number) {
    // Добавление нового варианта ответа к указанному вопросу
    this.questions[questionIndex].options.push({ text: '', correct: false });
  }

  isFormValid(): boolean {
    // Проверка наличия значения в поле testName и всех полей вопросов и вариантов ответов
    return this.testName.trim() !== '' && this.questions.every(
      q => q.title.trim() !== '' && q.options.every((o:any) => o.text.trim() !== ''));
  }
  
  removeOption(questionIndex: number, optionIndex: number) {
    // Удаление варианта ответа из указанного вопроса
    this.questions[questionIndex].options.splice(optionIndex, 1);
  }

  removeQuestion(questionIndex: number) {
    // Удаление вопроса по указанному индексу
    this.questions.splice(questionIndex, 1);
  }

  submitTest() {
    this.quiz = {
      quizName: this.testName,
      questions: this.questions,
    }
    console.log(this.quiz);
    
    // Вернуть массив вопросов (можно передать его куда-то еще или использовать по вашему усмотрению)
    this.http.post(this.baseUrl, this.quiz).subscribe(
     {
      
      next: () => {
        console.log("submitting was successfull, object sent:",  this.quiz);
        alert("Тест було відправлено")
      },
      error: (err) => {
        console.error("submitting was failed, ...", err);
        
      }
     }
    );
    
  }
}
