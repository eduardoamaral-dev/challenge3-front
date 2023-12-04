import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {TestNotificationComponent} from "./pages/test-notification/test-notification.component";
import {WorkScheduleConfigComponent} from "./pages/work-schedule-config/work-schedule-config.component";

export const routes: Routes = [
  // { path: '**', redirectTo: '/home' },
  {path:'home', component: HomeComponent},
  {path:'testNotification', component:TestNotificationComponent},
  {path:'workScheduleConfig',component: WorkScheduleConfigComponent}
];
