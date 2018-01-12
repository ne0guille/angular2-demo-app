import { CoreModule } from './../../core/core.module';

import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    InfiniteScrollComponent,
  ],
  exports: [
    // CommonModule,
    InfiniteScrollComponent,
  ]
})
export class SharedModule {}
