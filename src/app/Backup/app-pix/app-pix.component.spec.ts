import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPixComponent } from './app-pix.component';

describe('AppPixComponent', () => {
  let component: AppPixComponent;
  let fixture: ComponentFixture<AppPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
