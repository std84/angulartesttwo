/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputtwoComponent } from './inputtwo.component';

describe('InputtwoComponent', () => {
  let component: InputtwoComponent;
  let fixture: ComponentFixture<InputtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
