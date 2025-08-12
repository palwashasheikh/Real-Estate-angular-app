import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisleadingListComponent } from './misleading-list.component';

describe('MisleadingListComponent', () => {
  let component: MisleadingListComponent;
  let fixture: ComponentFixture<MisleadingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisleadingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisleadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
