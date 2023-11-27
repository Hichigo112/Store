import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home/contacts',
    loadChildren: () =>
      import('./modules/contacts/contacts.module').then(m => m.ContactsModule),
  },
  {
    path: 'home/about',
    loadChildren: () =>
      import('./modules/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'attendance',
    loadChildren: () =>
      import('./modules/attendance/attendance.module').then(
        m => m.AttendanceModule
      ),
  },
  {
    path: 'delivery',
    loadChildren: () =>
      import('./modules/delivery/delivery.module').then(m => m.DeliveryModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./modules/payment/payment.module').then(m => m.PaymentModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./modules/projects/projects.module').then(m => m.ProjectsModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
