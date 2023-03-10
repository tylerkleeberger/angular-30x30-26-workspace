import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from 'src/app/shared/api-interfaces/api-interfaces';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.scss']
})
export class WidgetDetailsComponent {
  currentWidget: Widget;
  originalTitle = '';

  @Input() set widget(value: Widget) {
    if(value) this.originalTitle = value.title;
    this.currentWidget = {...value};
  };

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;

}