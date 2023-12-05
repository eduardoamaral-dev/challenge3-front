import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
  @Input() title: string = ''
  @Input() progress: number = 0

  ngOnInit() {
  }
}
