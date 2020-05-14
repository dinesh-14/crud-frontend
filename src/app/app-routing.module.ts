import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { UsersComponent } from './layout/users/users.component';
import { SessionManagerComponent } from './layout/session-manager/session-manager.component';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'users',
    loadChildren: () => import('./layout/users/users.module').then(m => m.UsersModule)
  },
  { path: 'session-manager', component: SessionManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
