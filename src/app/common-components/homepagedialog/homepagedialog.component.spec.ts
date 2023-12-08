import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagedialogComponent } from './homepagedialog.component';

describe('HomepagedialogComponent', () => {
  let component: HomepagedialogComponent;
  let fixture: ComponentFixture<HomepagedialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepagedialogComponent]
    });
    fixture = TestBed.createComponent(HomepagedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
