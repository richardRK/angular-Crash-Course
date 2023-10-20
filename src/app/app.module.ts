import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { ContentExampleComponent } from './components/content-example/content-example.component';
import { FromeventExampleComponent } from './components/fromevent-example/fromevent-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyformComponent } from './components/myform/myform.component';
import { Myform2Component } from './components/myform2/myform2.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    ContentExampleComponent,
    FromeventExampleComponent,
    MyformComponent,
    Myform2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
