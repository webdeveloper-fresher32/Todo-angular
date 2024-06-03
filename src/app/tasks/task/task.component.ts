import { Component, Input, Output,EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Task{
  id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string;
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) task!:Task
@Output() complete=new EventEmitter<string>();
onCompleteTask(){
  this.complete.emit(this.task.id)
}
}
