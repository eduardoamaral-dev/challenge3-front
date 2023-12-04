import { Component } from '@angular/core';
import {WorkScheduleService} from "../../services/work-schedule.service";
// import {WorkScheduleService} from "../../services/work-schedule.service";

@Component({
  selector: 'app-test-notification',
  standalone: true,
  imports: [],
  templateUrl: './test-notification.component.html',
  styleUrl: './test-notification.component.css'
})
export class TestNotificationComponent {
  constructor(private service: WorkScheduleService) {
  }

  testNotification(){
    this.service.testNotification()
  }
}
