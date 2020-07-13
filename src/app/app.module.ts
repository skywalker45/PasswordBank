import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddPassComponent } from './add-pass/add-pass.component';
import { GetPassComponent } from './get-pass/get-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPassComponent,
    GetPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
