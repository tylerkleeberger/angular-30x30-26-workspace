import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { WidgetsComponent } from './dashboard/widgets/widgets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
