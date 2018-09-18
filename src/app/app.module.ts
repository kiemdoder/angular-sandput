import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import {MaterialModule} from './modules/material.module';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { CounterComponent } from './components/counter/counter.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    CounterComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
