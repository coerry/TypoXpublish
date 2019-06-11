import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolbarComponent } from './symbolbar.component';
import { SymbolComponent } from '../symbol/symbol.component';

describe('SymbolbarComponent', () => {
  let component: SymbolbarComponent;
  let fixture: ComponentFixture<SymbolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolbarComponent,
          SymbolComponent
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
