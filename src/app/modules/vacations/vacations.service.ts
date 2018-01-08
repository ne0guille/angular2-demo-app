import { Injectable } from '@angular/core';

import { Vacation } from './model/vacation.model';
import { mockedVacations } from './vacations-data';

@Injectable()
export class VacationService {

  constructor() { }

  public fetchVacations(lastId: number = 0): Promise<{ vacations: Vacation[], total: number}> {
    const vacations = mockedVacations.vacations.filter(v => v.id > lastId || lastId === 0).slice(0, 4);

    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve({ vacations, total: mockedVacations.total });
      }, 500);
    });
  }


}
