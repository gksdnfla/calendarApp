import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

import { Common } from './common/common.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPage } from './pages/main/main.page';
import { UpcomingComponent } from './components/upcoming/upcoming.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    UpcomingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    Common.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
