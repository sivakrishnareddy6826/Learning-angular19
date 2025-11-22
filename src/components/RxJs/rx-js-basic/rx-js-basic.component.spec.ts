import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsBasicComponent } from './rx-js-basic.component';

describe('RxJsBasicComponent', () => {
  let component: RxJsBasicComponent;
  let fixture: ComponentFixture<RxJsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
