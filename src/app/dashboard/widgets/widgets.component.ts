import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Widget } from 'src/app/shared/api-interfaces/api-interfaces';
import { WidgetsService } from 'src/app/shared/core-data/services/widgets.service';
import { WidgetsFacade } from 'src/app/shared/core-state/core-state/widgets/widgets.facade';


// const mockWidgets: Widget[] = [
//   { id: '1', title: 'Widget 01', description: 'Pending' },
//   { id: '2', title: 'Widget 02', description: 'Pending' },
//   { id: '3', title: 'Widget 03', description: 'Pending' },
// ];

// const emptyWidget: Widget = {
//   id: null,
//   title: '',
//   description: '',
// }


@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit{

  //------change to facade call-------//
  // widgets$: Observable<Widget[]>;
  // selectedWidget: Widget;

  allWidgets$: Observable<Widget[]> = this.widgetsFacade.allWidgets$;
  selectedWidget$: Observable<Widget> = this.widgetsFacade.selectedWidget$;

  constructor(
    private widgetsService: WidgetsService,
    private widgetsFacade: WidgetsFacade,
  ) {}

  ngOnInit(): void {
    this.reset();
    this.widgetsFacade.mutations$.subscribe((_) => this.reset)
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

// NO LONGER ASSIGN IN COMPONENT //
  // resetForm() {
  //   this.selectedWidget = emptyWidget;
  // }
  resetForm() {
    this.selectWidget(null)  
  }

  selectWidget(widget: Widget) {
    this.widgetsFacade.selectWidget(widget?.id);
  } 

  //removed service call and changed to facade -- change initial variable, as well
  loadWidgets() {
    this.widgetsFacade.loadWidgets()  
  }
// ----- MOVE TO FACADE ----- //
  // saveWidget(widget: Widget) {
  //   if(widget.id) {
  //     this.updateWidget(widget);
  //   } else {
  //     this.createWidget(widget);
  //   }
  // }

  saveWidget(widget: Widget) {
    this.widgetsFacade.saveWidget(widget);
  }

  deleteWidget(widget: Widget) {
    this.widgetsFacade.deleteWidget(widget);
  }



  // createWidget(widget: Widget) {
  //   // const newWidget = Object.assign({}, widget, {id: this.getRandomID()})
  //   // this.widgets = [...this.widgets, newWidget];
  //   this.widgetsService.createItem(widget).subscribe((result) => this.reset);
  // }

  // updateWidget(widget: Widget) {
  //   // this.widgets = this.widgets.map(w => {
  //   //   return (widget.id === w.id) ? widget : w;
  //   // });
  //   this.widgetsService.updateItem(widget).subscribe((result) => this.reset);
  // }

  // deleteWidget(widget: Widget) {
  //   // this.widgets = this.widgets.filter(w => widget.id !== w.id);
  //   this.widgetsService.deleteItem(widget).subscribe((result) => this.reset);

  // }

  // private getRandomID() {
  //   return Math.random().toString(36).substring(7);
  // }
  

}
