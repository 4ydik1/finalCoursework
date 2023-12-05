import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { CreateQuestionComponent } from './components/createQuestion/createQuestion.component';
import { MainComponent } from './components/main/main.component';
import { Tests } from './components/Tests/Tests.component';
import { QuestionService } from './services/question.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestComponent} from "./components/Test/test.component";



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreateQuestionComponent,
    MainComponent,
    Tests,
      TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
