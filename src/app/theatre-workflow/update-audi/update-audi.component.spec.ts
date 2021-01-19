import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAudiComponent } from './update-audi.component';

describe('UpdateAudiComponent', () => {
  let component: UpdateAudiComponent;
  let fixture: ComponentFixture<UpdateAudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAudiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
