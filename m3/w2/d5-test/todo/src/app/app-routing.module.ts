import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoCompletatiComponent } from './todo-completati/todo-completati.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },

  {
    path: 'app-todo-Completati',
    component: TodoCompletatiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
