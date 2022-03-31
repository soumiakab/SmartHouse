import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import {NavbarComponent } from './components/shared/navbar/navbar.component'
import {FooterComponent } from './components/shared/footer/footer.component'
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{path: 'app', component: ContainerComponent},
{path: 'auth/sign-in', component: SignInComponent},
{path: 'navbar', component: NavbarComponent},
{path: 'footer', component: FooterComponent},
{path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],

})
export class AppRoutingModule { }
