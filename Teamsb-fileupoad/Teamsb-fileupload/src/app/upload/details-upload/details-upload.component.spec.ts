import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailsUploadComponent } from './details-upload.component';

describe('DetailsUploadComponent', () => {
  let component: DetailsUploadComponent;
  let fixture: ComponentFixture<DetailsUploadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
