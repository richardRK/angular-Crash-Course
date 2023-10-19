import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentExampleComponent } from './content-example.component';

describe('ContentExampleComponent', () => {
  let component: ContentExampleComponent;
  let fixture: ComponentFixture<ContentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
