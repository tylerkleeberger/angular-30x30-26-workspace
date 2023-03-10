import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './dashboard/home/home.component';
import { WidgetsComponent } from './dashboard/widgets/widgets.component';
import { WidgetDetailsComponent } from './dashboard/widgets/widget-details/widget-details.component';
import { WidgetsListComponent } from './dashboard/widgets/widgets-list/widgets-list.component';
import { CoreStateModule } from './shared/core-state/core-state/core-state.module';
import { CoreDataModule } from './shared/core-data/core-data/core-data.module';
import { ToolbarComponent } from 'projects/ui-toolbar/src/lib/ui-toolbar/toolbar/toolbar.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetsComponent,
    WidgetDetailsComponent,
    WidgetsListComponent,
    ToolbarComponent
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreStateModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    AppRoutingModule,
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
