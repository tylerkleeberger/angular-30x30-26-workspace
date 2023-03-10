import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Widget } from 'src/app/shared/api-interfaces/api-interfaces';
import { WidgetsService } from 'src/app/shared/core-data/services/widgets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/widgets', icon: 'view_list', title: 'widgets' },
  ];

  widgets$: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets() {
    this.widgets$ = this.widgetsService.getAllItems();
  }

  logout() {  }

  toggleSideNav() { }

}
