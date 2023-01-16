import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bootstrap1Component } from './bootstrap1.component';

describe('Bootstrap1Component', () => {
  let component: Bootstrap1Component;
  let fixture: ComponentFixture<Bootstrap1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bootstrap1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bootstrap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
