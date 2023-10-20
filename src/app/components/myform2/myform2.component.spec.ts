import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myform2Component } from './myform2.component';

describe('Myform2Component', () => {
  let component: Myform2Component;
  let fixture: ComponentFixture<Myform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myform2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
