import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRocketComponent } from './update-rocket.component';

describe('UpdateRocketComponent', () => {
  let component: UpdateRocketComponent;
  let fixture: ComponentFixture<UpdateRocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRocketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
