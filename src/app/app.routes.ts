import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  { path: '**', redirectTo: '/home' },
  {path:'home', component: HomeComponent}
];
