import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ContainerComponent } from './components/container/container.component';
import { ButtonTurnComponent } from './components/button-turn/button-turn.component';
import { InfoContainerComponent } from './components/info-container/info-container.component';
import { AppRoutingModule } from './app-routing.module';
import {HouseInfoService} from './services/house-service/house-info.service';
import {HttpClientModule} from '@angular/common/http';
import { DeviceInfoComponent } from './components/device-info/device-info.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ContainerComponent,
    ButtonTurnComponent,
    InfoContainerComponent,
    DeviceInfoComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HouseInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
