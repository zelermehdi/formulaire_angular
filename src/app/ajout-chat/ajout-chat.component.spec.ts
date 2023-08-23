import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutChatComponent } from './ajout-chat.component';

describe('AjoutChatComponent', () => {
  let component: AjoutChatComponent;
  let fixture: ComponentFixture<AjoutChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutChatComponent]
    });
    fixture = TestBed.createComponent(AjoutChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
