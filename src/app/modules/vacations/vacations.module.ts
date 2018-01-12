import { CoreModule } from './../../core/core.module';

import { NgModule, ModuleWithProviders } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { VacationListComponent } from './components/vacation-list/vacation-list.component';
import { VacationCtComponent } from './containers/vacation-ct.component';
import { VacationItemComponent } from './components/vacation-item/vacation-item.component';

import { VacationService } from './vacations.service';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    VacationListComponent,
    VacationItemComponent,
    VacationCtComponent
  ],
  exports: [
    VacationCtComponent
  ],
  entryComponents: [
    VacationCtComponent
  ]
})
export class VacationsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: VacationsModule,
      providers: [VacationService]
    };
  }
}
