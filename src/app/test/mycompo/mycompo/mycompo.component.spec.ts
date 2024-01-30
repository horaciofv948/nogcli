import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycompoComponent } from './mycompo.component';

describe('MycompoComponent', () => {
  let component: MycompoComponent;
  let fixture: ComponentFixture<MycompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MycompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MycompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
