import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCompletatiComponent } from './todo-completati.component';

describe('TodoCompletatiComponent', () => {
  let component: TodoCompletatiComponent;
  let fixture: ComponentFixture<TodoCompletatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCompletatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCompletatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
