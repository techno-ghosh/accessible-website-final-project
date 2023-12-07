import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { CallSchedulerComponent } from './call-scheduler/call-scheduler.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component : ServicesComponent },
  { path: 'schedule-call', component : CallSchedulerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
