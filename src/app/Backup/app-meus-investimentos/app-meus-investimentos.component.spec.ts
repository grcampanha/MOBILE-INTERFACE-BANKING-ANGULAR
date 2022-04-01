import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMeusInvestimentosComponent } from './app-meus-investimentos.component';

describe('AppMeusInvestimentosComponent', () => {
  let component: AppMeusInvestimentosComponent;
  let fixture: ComponentFixture<AppMeusInvestimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMeusInvestimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMeusInvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
