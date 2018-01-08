import { Component, EventEmitter, Input } from '@angular/core';

import { Vacation } from '../../model/vacation.model';

@Component({
  selector: 'vacation-item',
  templateUrl: './vacation-item.component.html',
  styleUrls: ['./vacation-item.component.scss']
})
export class VacationItemComponent {
  @Input() vacation: Vacation;

  constructor() { }

}
