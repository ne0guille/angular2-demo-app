import { VacationItemComponent } from './../components/vacation-item/vacation-item.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { VacationCtComponent } from './vacation-ct.component';

import { mockedVacations } from './../vacations-data';
import { Vacation } from '../model/vacation.model';
import { VacationService } from '../vacations.service';
import { VacationListComponent } from '../components/vacation-list/vacation-list.component';
import { InfiniteScrollComponent } from '../../../core/components/infinite-scroll/infinite-scroll.component';

class MockVacationService {
  public vacations: Vacation[] = mockedVacations.vacations.slice(0, 4);

  fetchVacations() {
    return Promise.resolve({ vacations: this.vacations, total: 4});
  }
}

describe('VacationCtComponent', () => {
  let component: VacationCtComponent;
  let fixture: ComponentFixture<VacationCtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VacationCtComponent,
        VacationListComponent,
        VacationItemComponent,
        InfiniteScrollComponent ],
      providers: [
        { provide: VacationService, useClass: MockVacationService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationCtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get 4 vacations ngOnInit', async(inject([], () => {
    fixture.componentInstance.ngOnInit();
    fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        return fixture.whenStable();
      })
      .then(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('.row.vacation-item').length).toBe(4);
      });
  })));
});
