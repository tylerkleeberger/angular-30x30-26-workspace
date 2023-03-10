import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output() toggleSideNav = new EventEmitter();
  @Output() logout = new EventEmitter();

}
