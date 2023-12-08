import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common-components/navigation/navigation.component';
import { ParagraphComponent } from './common-components/paragraph/paragraph.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { CallSchedulerComponent } from './call-scheduler/call-scheduler.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { HomepagedialogComponent } from './common-components/homepagedialog/homepagedialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ParagraphComponent,
    ServicesComponent,
    HomeComponent,
    CallSchedulerComponent,
    HomepagedialogComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
