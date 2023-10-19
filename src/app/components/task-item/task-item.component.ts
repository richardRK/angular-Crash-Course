import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task:Task | undefined;

  constructor() {
    console.log(this.task);
   }

  ngOnInit(): void {
  }

}
