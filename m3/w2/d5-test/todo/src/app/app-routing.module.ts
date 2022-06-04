import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoCompletatiComponent } from './todo-completati/todo-completati.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },

  {
    path: 'app-todo-Completati',
    component: TodoCompletatiComponent
  },
  {
    path: 'app-todo',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
