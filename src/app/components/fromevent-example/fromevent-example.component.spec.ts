import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromeventExampleComponent } from './fromevent-example.component';

describe('FromeventExampleComponent', () => {
  let component: FromeventExampleComponent;
  let fixture: ComponentFixture<FromeventExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromeventExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromeventExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
