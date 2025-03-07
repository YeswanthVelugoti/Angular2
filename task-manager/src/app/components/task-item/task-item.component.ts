import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import { PriorityPipe } from '../../pipes/priority.pipe';

@Component({
  selector: 'app-task-item',
  imports: [HighlightDirective,PriorityPipe],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task!: Task;  // Receives task data
  @Output() delete = new EventEmitter<number>(); // Emits delete event
  @Output() toggleStatus = new EventEmitter<number>(); // Emits toggle event

  onDelete() {
    this.delete.emit(this.task.id);
  }

  onToggle() {
    this.toggleStatus.emit(this.task.id);
  }

}
