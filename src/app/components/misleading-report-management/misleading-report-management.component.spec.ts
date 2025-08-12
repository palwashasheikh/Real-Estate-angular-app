import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisleadingReportManagementComponent } from './misleading-report-management.component';

describe('MisleadingReportManagementComponent', () => {
  let component: MisleadingReportManagementComponent;
  let fixture: ComponentFixture<MisleadingReportManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisleadingReportManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisleadingReportManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
