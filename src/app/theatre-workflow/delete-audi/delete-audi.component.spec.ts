import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAudiComponent } from './delete-audi.component';

describe('DeleteAudiComponent', () => {
  let component: DeleteAudiComponent;
  let fixture: ComponentFixture<DeleteAudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAudiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
