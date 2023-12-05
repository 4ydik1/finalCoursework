import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionComponent } from './components/createQuestion/createQuestion.component';
import { MainComponent } from './components/main/main.component';
import { Tests } from './components/Tests/Tests.component';
import {TestComponent} from "./components/Test/test.component";

const routes: Routes = [
  {path: "", component:MainComponent},
  {path:"quiz-constructor", component:CreateQuestionComponent},
  {path:"tests", component:Tests},
  {path:"tests/:testId", component:TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
