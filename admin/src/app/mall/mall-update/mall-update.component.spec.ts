import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallUpdateComponent } from './mall-update.component';

describe('MallUpdateComponent', () => {
  let component: MallUpdateComponent;
  let fixture: ComponentFixture<MallUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MallUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MallUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
