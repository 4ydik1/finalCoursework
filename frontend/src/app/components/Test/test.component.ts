// login.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
    selector: 'app-test',
    templateUrl:'test.component.html',
    styleUrls: ["test.component.css"]
})

export class TestComponent {

   constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
    ) {}

   questionData:any;
   testId:any = {}
   baseUrl:string = "";
   questionList: any[] = [];
  numberOfQuestions: number = 0;
  currentQuestion: number = 0;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  isQuizCompleted: boolean = false;
  selectedOptions: any[] = [];
  counter:number = 0;
  buttonDisabled: boolean[] = [];
  buttonPressedNumber: number = 1;
    options:any = '';
    booleanArray: boolean[] = [];
resultArray:any[] = [];


   ngOnInit() {
    // console.log(this.selectedOptions);
    
         this.route.queryParams.subscribe({
          
            next: (params) => {
                this.testId =  params  
                 this.baseUrl = `http://localhost:3000/tests/${this.testId.testId}`;

            },
           
        })
        this.getQuestion()
        
        
}
    

   async getQuestion() {
    
    await this.questionService.getQuestionJsonBackend(this.baseUrl).subscribe({
        next: (data)=> {
          this.questionData = data
          this.selectedOptions = this.questionData.questions.map((question:any) =>
            question.options.map(() => false)
            
        );
        this.buttonDisabled = Array(this.questionData.questions.length).fill(true);
        this.buttonDisabled[0] = false;
        console.log(this.counter);
        
            
        },

    })
    }

      answer(currentQuestion: number, options: any[]) {
        if (this.buttonPressedNumber === this.questionData.questions.length) {
          this.isQuizCompleted = true;
        }
       this.options = this.questionData.questions[this.counter].options;

       for (let i = 0; i < this.questionData.questions[this.counter].options.length; i++) {
        console.log(this.options[i].correct);
        this.booleanArray.push(this.options[i].correct)
       this.resultArray.push(options[i])
        
       }
       console.log(this.booleanArray);
       console.log(this.resultArray);
       
       
       
        
        this.counter++
        this.buttonDisabled[this.counter] = false;
        this.buttonDisabled[this.counter - 1] = true;
        this.buttonPressedNumber++

        if(this.isQuizCompleted) {
          for (let i = 0; i < this.booleanArray.length; i++) {
            if(this.booleanArray[i] === this.resultArray[i]) {
              this.correctAnswer++
            } else {
              this.inCorrectAnswer++;
            }
         }
        }
      }
     

    }

