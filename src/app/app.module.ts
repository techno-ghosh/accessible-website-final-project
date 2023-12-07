import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common-components/navigation/navigation.component';
import { ParagraphComponent } from './common-components/paragraph/paragraph.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { CallSchedulerComponent } from './call-scheduler/call-scheduler.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ParagraphComponent,
    ServicesComponent,
    HomeComponent,
    CallSchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
