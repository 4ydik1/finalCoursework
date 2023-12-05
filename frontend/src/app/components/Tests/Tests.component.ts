// Tests.component.ts

import { Component, OnInit } from "@angular/core";
import { QuestionService } from "../../services/question.service";
import { Router } from "@angular/router";

@Component({
  selector: "view-tests-component",
  templateUrl: "./Tests.component.html",
  styleUrls: ["./Tests.component.css"]
})

export class Tests implements OnInit {
  constructor(
    private questionService: QuestionService,
    private router: Router
    ) {}

  tests: any; // Rename 'questions' to 'tests'
  testsLength: number[] = [];
  baseUrl: string = "http://localhost:3000/tests";
  stringData: string = "http://localhost:3000/testsdsds";
  index:number = 0;
  
  testDetails: any;

  ngOnInit() {
    return this.questionService
      .getQuestionJsonBackend(this.baseUrl)
      .subscribe((data) => {
        console.log("In subscribe", data);
        this.tests = data;
        

        this.tests.forEach((element: any) => {
          element.showQuestion = false;
          this.testsLength.push(element.questions.length)
        });
      });
  }

  startTest(testId: number, index: number) {

    this.questionService
      .getQuestionJsonBackend(`${this.baseUrl}/${testId}`) // Fix the URL format
      .subscribe({
        next: (data: any) => {
          this.testDetails = data;
          console.log("in subscribe" + JSON.stringify(data));
        },

        error: (error) => {
          console.log("something bad happened...", error);
        },

        complete: () => {
          console.log("Completed");
          console.log("testDetails: " + JSON.stringify(this.testDetails));
          

          this.router.navigate([`/tests/${testId}`], {
            queryParams: {
              testId: testId,
            }
          })
        }
      });
    this.tests[index].showQuestion = true;
  }
}
