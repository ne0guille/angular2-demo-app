import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationItemComponent } from './vacation-item.component';
import { Vacation } from './../../model/vacation.model';
import { mockedVacations } from './../../vacations-data';
import { By } from '@angular/platform-browser';


describe('VacationItemComponent', () => {
  let component: VacationItemComponent;
  let fixture: ComponentFixture<VacationItemComponent>;
  let expectedVacation: Vacation;
  let vacationEl: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationItemComponent);
    component = fixture.componentInstance;
    expectedVacation = mockedVacations.vacations[0];
    component.vacation = expectedVacation;
    vacationEl  = fixture.debugElement.query(By.css('.vacation-item'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Vacation info', () => {
    const { name, durationInDays, dates, photo } = expectedVacation;

    expect(vacationEl.nativeElement.querySelector('.vacation-item__name').innerText).toContain(name);
    expect(vacationEl.nativeElement.querySelector('.vacation-item__days').innerText).toContain(durationInDays);
    expect(vacationEl.nativeElement.querySelector('.vacation-item__dates').innerText).toContain(dates);
    expect(vacationEl.nativeElement.querySelector('.vacation-item__img').src).toBe(photo);
  });
});
