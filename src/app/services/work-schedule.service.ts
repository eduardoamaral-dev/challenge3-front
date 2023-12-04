import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import axios from 'axios'
import WorkScheduleDTO from "../dtos/WorkScheduleDTO";
@Injectable({
  providedIn: 'root'
})
export class WorkScheduleService {

  constructor() { }

    public testNotification(){
    axios.post('http://localhost:5000/api/v1/testToast', {})
  }

  updateWorkSchedule(workSchedule: WorkScheduleDTO) {
    axios.post('http://localhost:5000/api/v1/updateWorkSchedule', workSchedule)
      .then(r => {
        console.log('update -> success!')
      })
  }
}
