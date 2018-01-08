import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationListComponent } from './vacation-list.component';
import { VacationItemComponent } from './../vacation-item/vacation-item.component';
import { InfiniteScrollComponent } from '../../../../core/components/infinite-scroll/infinite-scroll.component';
import { By } from '@angular/platform-browser';

describe('VacationListComponent', () => {
  let component: VacationListComponent;
  let fixture: ComponentFixture<VacationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VacationListComponent,
        VacationItemComponent,
        InfiniteScrollComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have infinite-scroll', () => {
    expect(fixture.debugElement.nativeElement.querySelector('infinite-scroll')).not.toBe(null);
  });

  it('should set listItemTemplate on OnInit', () => {
    component.ngOnInit();
    expect(component.templateRef).toBe(component.listItemTemplate);
  });

  it('should emit requestMoreItems onBottoReach', () => {
    spyOn(component.requestMoreItems, 'emit');
    component.onBottomReached();
    expect(component.requestMoreItems.emit).toHaveBeenCalledTimes(1);
  });
});
