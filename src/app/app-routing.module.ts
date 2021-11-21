import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'About', component: AboutPageComponent,canActivate: [AuthGuard] },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
