import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './modules/builder/card/card.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CardinfoComponent } from './modules/builder/cardinfo/cardinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardinfoComponent
  ],
  entryComponents: [
    CardinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
