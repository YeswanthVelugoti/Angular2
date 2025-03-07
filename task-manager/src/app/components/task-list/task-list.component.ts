import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule,TaskItemComponent,TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks();
  }

  toggleTaskStatus(task: Task) {
    this.taskService.toggleTaskStatus(task.id);
    this.tasks = this.taskService.getTasks();
  }

  addTask(newTask: Task) {
    this.taskService.addTask(newTask); // Add the task using TaskService
    this.tasks = this.taskService.getTasks(); // Refresh the task list
  }

}
