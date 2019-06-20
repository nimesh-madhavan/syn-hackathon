import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerListComponent } from './server-list/server-list.component';
import {MetricsListComponent}  from './metrics-list/metrics-list.component'
import { HttpClientModule } from '@angular/common/http'; 
import {AddServerComponent}  from './add-server/add-server.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent,
    MetricsListComponent,
    AddServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
