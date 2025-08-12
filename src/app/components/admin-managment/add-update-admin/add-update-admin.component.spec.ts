import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateAdminComponent } from './add-update-admin.component';

describe('AddUpdateAdminComponent', () => {
  let component: AddUpdateAdminComponent;
  let fixture: ComponentFixture<AddUpdateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
