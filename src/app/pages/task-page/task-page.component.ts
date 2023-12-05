import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import Task from "../../dtos/Task";
import {TaskService} from "../../services/task.service";
import {TaskComponent} from "../../components/task/task.component";

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [
    NgForOf,
    TaskComponent
  ],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent implements OnInit{
  tasks: Task[] | undefined = []

  constructor(private service: TaskService) {
  }

  ngOnInit() {
    this.tasks = this.service.getTasks()
  }
}
