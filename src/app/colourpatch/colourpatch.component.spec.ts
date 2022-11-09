import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourpatchComponent } from './colourpatch.component';

describe('ColourpatchComponent', () => {
  let component: ColourpatchComponent;
  let fixture: ComponentFixture<ColourpatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourpatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColourpatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
