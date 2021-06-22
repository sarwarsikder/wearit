import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallCreateComponent } from './mall-create.component';

describe('MallCreateComponent', () => {
  let component: MallCreateComponent;
  let fixture: ComponentFixture<MallCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MallCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MallCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
