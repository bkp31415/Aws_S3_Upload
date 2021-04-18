import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListUploadComponent } from './list-upload.component';

describe('ListUploadComponent', () => {
  let component: ListUploadComponent;
  let fixture: ComponentFixture<ListUploadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
