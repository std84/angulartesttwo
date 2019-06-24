/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputoneComponent } from './inputone.component';

describe('InputoneComponent', () => {
  let component: InputoneComponent;
  let fixture: ComponentFixture<InputoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
