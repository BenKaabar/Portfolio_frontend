import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWorkComponent } from './dashboard-work.component';

describe('DashboardWorkComponent', () => {
  let component: DashboardWorkComponent;
  let fixture: ComponentFixture<DashboardWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardWorkComponent]
    });
    fixture = TestBed.createComponent(DashboardWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
