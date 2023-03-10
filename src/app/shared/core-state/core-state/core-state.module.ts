import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStoreConfig } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WidgetsFacade } from './widgets/widgets.facade';
import { WidgetsEffects } from './widgets/widgets.effects';

const STORE_NAME = 'fem-store';
const storeConfig: RootStoreConfig<any, any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictActionSerializability: true,
    strictStateImmutability: true,
    strictStateSerializability: true,
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([WidgetsEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, name: STORE_NAME}),
    // StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  providers: [WidgetsFacade],
})
export class CoreStateModule { }
