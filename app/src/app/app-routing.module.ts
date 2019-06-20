import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerListComponent } from './server-list/server-list.component'
import { MetricsListComponent } from './metrics-list/metrics-list.component'

const routes: Routes = [
  { path: 'servers', component: ServerListComponent },
  { path: 'metrics/:server', component: MetricsListComponent },
  { path: '', redirectTo: '/servers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
