import { Component, inject, Input, Output } from "@angular/core";
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from "../tasks.service";

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe],
  })

  export class TaskComponent {
    @Input({ required: true }) task!: Task;

    private tasksService = inject(TasksService);

    OnCompletedTask() {
      this.tasksService.removeTask(this.task.id)
      //this.completed.emit(this.task.id)
    }
  }