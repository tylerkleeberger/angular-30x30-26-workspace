import { NgModule } from '@angular/core';
import { UiToolbarComponent } from './ui-toolbar.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ToolbarComponent } from './ui-toolbar/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UiToolbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    UiToolbarComponent,
    ToolbarComponent
  ]
})
export class UiToolbarModule { }
