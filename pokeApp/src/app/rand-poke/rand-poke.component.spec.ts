import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandPokeComponent } from './rand-poke.component';

describe('RandPokeComponent', () => {
  let component: RandPokeComponent;
  let fixture: ComponentFixture<RandPokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandPokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
