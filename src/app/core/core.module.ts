import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';

@NgModule({
    imports: [
      BrowserAnimationsModule,
      BrowserModule,
      CommonModule,
      NgbModule.forRoot(),
      RouterModule,
    ],
    providers: [],
    declarations: [
      InfiniteScrollComponent,
    ],
    exports: [InfiniteScrollComponent]
  })
  export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
      if (parentModule) {
        throw new Error('CoreModule is already loaded. Import it in the AppModule only');
      }
    }
  }
