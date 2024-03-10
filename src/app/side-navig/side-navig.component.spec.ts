import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigComponent } from './side-navig.component';

describe('SideNavigComponent', () => {
  let component: SideNavigComponent;
  let fixture: ComponentFixture<SideNavigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavigComponent]
    });
    fixture = TestBed.createComponent(SideNavigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
