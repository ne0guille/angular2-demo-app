import { VacationCtComponent } from './modules/vacations/containers/vacation-ct.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from './core/components/not-found/not-found.component';

/** base path is "sm" and it's on the env consts. Angular requires it to be hardcoded on the routes's paths */

export const routes: Routes = [
  { path: '', redirectTo: 'vacations', pathMatch: 'full' },
  {
    path: 'vacations',
    component: VacationCtComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
