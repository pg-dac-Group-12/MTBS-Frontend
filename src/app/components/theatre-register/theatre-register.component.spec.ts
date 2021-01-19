import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreRegisterComponent } from './theatre-register.component';

describe('TheatreRegisterComponent', () => {
  let component: TheatreRegisterComponent;
  let fixture: ComponentFixture<TheatreRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
