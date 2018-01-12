import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'not-found.component.html',
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class NotFoundPageComponent { }
