import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAudiComponent } from './add-audi.component';

describe('AddAudiComponent', () => {
  let component: AddAudiComponent;
  let fixture: ComponentFixture<AddAudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAudiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
