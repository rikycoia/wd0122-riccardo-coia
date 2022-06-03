import { Component } from '@angular/core';
import { List } from './class/todo';
import { Todoservice } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titolo: string | undefined;
  constructor(private todolist: Todoservice ){}

  input:string = ""

  id:number = 1
  title:string = ""
  completed = false

  todo:List[] = [
    {
     id: 1,
     title: 'comprare i biglietti',
     completed: false
    }
   ];


  aggiungi(){
    let titolo = this.input
    let nuovaLista = new List(this.id, titolo, this.completed);
    this.todo.push(nuovaLista)
  }

  completa(){
    if (this.completed == true) {
}


  }
}

