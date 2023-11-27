import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AttendanceComponent } from './components/attendance/attendance.component';

export const routes: Routes = [
  {
    path: '',
    component: AttendanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutes {}
