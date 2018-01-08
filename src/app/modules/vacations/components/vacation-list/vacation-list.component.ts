import { Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';

import { Vacation } from '../../model/vacation.model';

@Component({
  selector: 'vacation-list',
  templateUrl: './vacation-list.component.html',
  styleUrls: ['./vacation-list.component.scss']
})
export class VacationListComponent implements OnInit {

  @Input() vacations: Vacation[];
  @Input() total: number;
  @Output() requestMoreItems: EventEmitter<{ lastId: number }> = new EventEmitter();
  @ViewChild('vacationListItem') listItemTemplate;
  @ViewChild('vacationInlineItem') InlineItemTemplate;

  public templateRef: any;

  constructor() { }

  public ngOnInit(): void {
    this.templateRef = this.listItemTemplate;
  }

  public toogleTemplate() {
    this.templateRef = this.templateRef === this.InlineItemTemplate ? this.listItemTemplate : this.InlineItemTemplate;
  }

  public onBottomReached(): void {
    const lastId = !!this.vacations ? this.vacations[this.vacations.length - 1].id : 0;

    this.requestMoreItems.emit({lastId});
  }
}
