import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiToolbarModule } from 'projects/ui-toolbar/src/public-api';
import { CoreDataModule } from 'src/app/shared/core-data/core-data/core-data.module';
import { CoreStateModule } from 'src/app/shared/core-state/core-state/core-state.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CoreDataModule,
    CoreStateModule,
    UiToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
