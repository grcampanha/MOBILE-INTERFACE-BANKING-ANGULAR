import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFazerPixComponent } from './app-fazer-pix.component';

describe('AppFazerPixComponent', () => {
  let component: AppFazerPixComponent;
  let fixture: ComponentFixture<AppFazerPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFazerPixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFazerPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
