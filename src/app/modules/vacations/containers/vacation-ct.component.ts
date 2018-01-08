import { Component, OnInit } from '@angular/core';

import { Vacation } from './../model/vacation.model';
import { VacationService } from './../vacations.service';


@Component({
  selector: 'vacation-ct',
  templateUrl: './vacation-ct.component.html',
  styleUrls: ['./vacation-ct.component.scss']
})
export class VacationCtComponent implements OnInit {
  public list: Vacation[];
  public total: number;

  constructor(private vacationService: VacationService) { }

  public ngOnInit(): void {
    this.vacationService.fetchVacations().then(response => {
      this.list = response.vacations;
      this.total = response.total;
    });
  }

  public onRequestMoreItems(event: { lastId: number }): void {
    this.vacationService.fetchVacations(event.lastId).then(response => {
      this.list = this.list.concat(...response.vacations);
    });
  }

}
