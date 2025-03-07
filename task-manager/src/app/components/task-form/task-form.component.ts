import { Component, EventEmitter, NgModuleRef, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  @Output() addTask = new EventEmitter<Task>(); // Emits new task event

  taskTitle: string = '';
  taskPriority: string = 'Medium';

  onSubmit() {
    if (!this.taskTitle.trim()) return; // Prevent adding empty tasks
    console.log('Selected Priority:', this.taskPriority); // Debugging output
    const priorityMap: { [key: string]: number } = { "High": 1, "Medium": 2, "Low": 3 };

    const newTask: Task = {
      id: Date.now(),
      title: this.taskTitle,
      completed: false,
      priority: priorityMap[this.taskPriority] || 1
    };

    console.log('New Task Object:', newTask); // Print the entire task object
    this.addTask.emit(newTask); // Emit new task
    this.taskTitle = ''; // Clear input field
  }
}
