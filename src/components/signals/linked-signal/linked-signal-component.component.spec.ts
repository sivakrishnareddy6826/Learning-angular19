import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedSignalComponentComponent } from './linked-signal.component';

describe('LinkedSignalComponentComponent', () => {
  let component: LinkedSignalComponentComponent;
  let fixture: ComponentFixture<LinkedSignalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedSignalComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedSignalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
