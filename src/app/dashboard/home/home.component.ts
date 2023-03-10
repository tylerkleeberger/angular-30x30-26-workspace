import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Widget } from 'src/app/shared/api-interfaces/api-interfaces';
import { WidgetsService } from 'src/app/shared/core-data/services/widgets.service';
import { WidgetsFacade } from 'src/app/shared/core-state/core-state/widgets/widgets.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  allWidgets$: Observable<Widget[]> = this.widgetsFacade.allWidgets$;

  constructor(
    private widgetsService: WidgetsService,
    private widgetsFacade: WidgetsFacade
  ) {}

  ngOnInit(): void {
      this.loadWidgets();
  }

  loadWidgets() {
    this.widgetsFacade.loadWidgets();
  }

}
