import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmprestimoComponent } from './app-emprestimo.component';

describe('AppEmprestimoComponent', () => {
  let component: AppEmprestimoComponent;
  let fixture: ComponentFixture<AppEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
