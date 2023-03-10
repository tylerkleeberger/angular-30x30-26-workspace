import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Workspace';
  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/widgets', icon: 'view_list', title: 'widgets'}
  ]

  toggleSideNav() {}
  logout() {}
}
