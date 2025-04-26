import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStatementsComponent } from './control-statements.component';

describe('ControlStatementsComponent', () => {
  let component: ControlStatementsComponent;
  let fixture: ComponentFixture<ControlStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlStatementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
