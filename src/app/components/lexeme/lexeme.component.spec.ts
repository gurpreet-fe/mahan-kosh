import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexemeComponent } from './lexeme.component';

describe('LexemeComponent', () => {
  let component: LexemeComponent;
  let fixture: ComponentFixture<LexemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LexemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LexemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
