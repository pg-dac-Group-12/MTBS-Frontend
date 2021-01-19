import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelShowComponent } from './cancel-show.component';

describe('CancelShowComponent', () => {
  let component: CancelShowComponent;
  let fixture: ComponentFixture<CancelShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
