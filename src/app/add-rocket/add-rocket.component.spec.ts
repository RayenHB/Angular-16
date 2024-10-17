import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRocketComponent } from './add-rocket.component';

describe('AddRocketComponent', () => {
  let component: AddRocketComponent;
  let fixture: ComponentFixture<AddRocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRocketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
