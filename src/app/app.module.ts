import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { IndexComponent } from './index/index.component';

const routes: Routes =[
{path:'index', component:IndexComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
