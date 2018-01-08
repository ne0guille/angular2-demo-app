import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollComponent } from './infinite-scroll.component';
import { mockedVacations } from './../../../modules/vacations/vacations-data';

describe('InfiniteScrollComponent', () => {
  let component: InfiniteScrollComponent;
  let fixture: ComponentFixture<InfiniteScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onScroll if requestOnInit is true', () => {
    spyOn(component, 'onScroll');

    component.requestOnInit = true;
    component.ngOnInit();

    expect(component.onScroll).toHaveBeenCalledTimes(1);
  });

  it('should not call onScroll if list is not empty', () => {
    spyOn(component, 'onScroll');

    component.requestOnInit = true;
    component.list = mockedVacations.vacations;

    expect(component.onScroll).toHaveBeenCalledTimes(0);
  });

  it('should not call onScroll if requestOnInit is false', () => {
    spyOn(component, 'onScroll');

    expect(component.onScroll).toHaveBeenCalledTimes(0);
  });

  it('should emit bottomReached onScroll', () => {
    spyOn(component.bottomReached, 'emit');

    component.onScroll();

    expect(component.isLoading).toBe(true);
    expect(component.bottomReached.emit).toHaveBeenCalledTimes(1);
  });


  it('should not emit bottomReached onScroll if it is loading', () => {
    spyOn(component.bottomReached, 'emit');

    component.isLoading = true;
    component.onScroll();

    expect(component.bottomReached.emit).toHaveBeenCalledTimes(0);
  });

  it('should not emit bottomReached onScroll if is completed', () => {
    spyOn(component.bottomReached, 'emit');

    component.complete = true;
    component.onScroll();

    expect(component.bottomReached.emit).toHaveBeenCalledTimes(0);
  });

  it('should stop loading after list is setted', () => {
    spyOn(component, 'onScroll');

    component.isLoading = true;
    component.list = mockedVacations.vacations;

    expect(component.isLoading).toBe(false);
  });
});
