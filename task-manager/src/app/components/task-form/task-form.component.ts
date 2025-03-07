import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  @Output() addTask = new EventEmitter<Task>(); // Emits new task event

  taskTitle: string = '';
  taskPriority: string = 'Medium';

  onSubmit() {
    if (!this.taskTitle.trim()) return; // Prevent adding empty tasks

    const newTask: Task = {
      id: Date.now(),
      title: this.taskTitle,
      completed: false,
      priority: this.taskPriority
    };

    this.addTask.emit(newTask); // Emit new task
    this.taskTitle = ''; // Clear input field
  }
}
