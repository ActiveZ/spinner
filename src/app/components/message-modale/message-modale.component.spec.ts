import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageModaleComponent } from './message-modale.component';

describe('MessageModaleComponent', () => {
  let component: MessageModaleComponent;
  let fixture: ComponentFixture<MessageModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageModaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
