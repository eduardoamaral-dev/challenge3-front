import { Component } from '@angular/core';
import {WorkScheduleService} from "../../services/work-schedule.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-work-schedule-config',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './work-schedule-config.component.html',
  styleUrl: './work-schedule-config.component.css'
})
export class WorkScheduleConfigComponent {
  myForm = new FormGroup({
    startOfWork: new FormControl<string>(''),
    breakTime: new FormControl<string>(''),
    backToWork: new FormControl<string>(''),
    endOfWork: new FormControl<string>(''),
  })
  constructor(private service: WorkScheduleService) {
  }

  testNotification(){
    this.service.testNotification()
  }

  updateWorkSchedule(){
    this.service.updateWorkSchedule({
      startOfWork: this.myForm.getRawValue().startOfWork,
      breakTime: this.myForm.getRawValue().breakTime,
      backToWork: this.myForm.getRawValue().backToWork,
      endOfWork: this.myForm.getRawValue().endOfWork,
    })
  }
}
