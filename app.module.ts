import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputoneComponent } from './inputone/inputone.component';
import { InputtwoComponent } from './inputtwo/inputtwo.component';
import {DialogModule} from 'primeng/dialog';
import {DataService} from './services/data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
   declarations: [
      AppComponent,
      InputoneComponent,
      InputtwoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      DialogModule,
      BrowserAnimationsModule
   ],
   providers: [DataService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
