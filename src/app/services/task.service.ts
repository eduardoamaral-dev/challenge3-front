import {Injectable} from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {
  }

  public getTasks() {
    let result
    axios.get('http://localhost:5000/api/v1/getTasks')
      .then((tasks) => {
        result = tasks
      })
      .catch((e) => {
        console.error(e)
      })

    return result
  }
}
