import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from 'rxjs/operators';
import * as fromWidgets from './widgets.reducer';
import * as WidgetsActions from './widgets.actions';


import { Widget } from "src/app/shared/api-interfaces/api-interfaces";
import { WidgetsService } from "src/app/shared/core-data/services/widgets.service";
import { Store } from "@ngrx/store";

@Injectable()
export class WidgetsEffects {
  // loadWidgets$ = createEffect(() => this.actions$.pipe(
  //   ofType(WidgetsActions.loadWidgets),
  //   fetch({
  //     run: (action) =>
  //       this.widgetsService
  //         .all()
  //         .pipe(
  //           map((widgets: Widget[]) =>
  //             WidgetsActions.loadWidgetsSuccess({ widgets })
  //           )
  //         ),
  //     onError: (action, error) => WidgetsActions.loadWidgetsFailure({ error }),
  //   })
  // ));

  // loadWidget$ = createEffect(() => this.actions$.pipe(
  //   ofType(WidgetsActions.loadWidget),
  //   fetch({
  //     run: (action) =>
  //       this.widgetsService
  //         .find(action.widgetId)
  //         .pipe(
  //           map((widget: Widget) =>
  //             WidgetsActions.loadWidgetSuccess({ widget })
  //           )
  //         ),
  //     onError: (action, error) => WidgetsActions.loadWidgetFailure({ error }),
  //   })
  // ));

  // createWidget$ = createEffect(() => this.actions$.pipe(
  //   ofType(WidgetsActions.createWidget),
  //   pessimisticUpdate({
  //     run: (action) =>
  //       this.widgetsService
  //         .create(action.widget)
  //         .pipe(
  //           map((widget: Widget) =>
  //             WidgetsActions.createWidgetSuccess({ widget })
  //           )
  //         ),
  //     onError: (action, error) => WidgetsActions.createWidgetFailure({ error }),
  //   })
  // ));

  // updateWidget$ = createEffect(() => this.actions$.pipe(
  //   ofType(WidgetsActions.updateWidget),
  //   pessimisticUpdate({
  //     run: (action) =>
  //       this.widgetsService
  //         .update(action.widget)
  //         .pipe(
  //           map((widget: Widget) =>
  //             WidgetsActions.updateWidgetSuccess({ widget })
  //           )
  //         ),
  //     onError: (action, error) => WidgetsActions.updateWidgetFailure({ error }),
  //   })
  // ));

  // deleteWidget$ = createEffect(() => this.actions$.pipe(
  //   ofType(WidgetsActions.deleteWidget),
  //   pessimisticUpdate({
  //     run: (action) =>
  //       this.widgetsService
  //         .delete(action.widget)
  //         .pipe(
  //           map((widget: Widget) =>
  //             WidgetsActions.deleteWidgetSuccess({ widget })
  //           )
  //         ),
  //     onError: (action, error) => WidgetsActions.deleteWidgetFailure({ error }),
  //   })
  // ));

  constructor(
    private actions$: Actions,
    private widgetsService: WidgetsService,
    private store: Store
  ) {}
}
