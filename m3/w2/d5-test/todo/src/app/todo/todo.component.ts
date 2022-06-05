import { Component, OnInit } from '@angular/core';
import { List } from '../class/todo';
import { Todoservice } from '../service/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {



  ngOnInit(): void {
  }

  constructor(private todolist: Todoservice ){}

  input:string = ""
  selected:boolean = true;

  id:number = 1
  title:string = ""
  completed = true
  active: boolean = true

  todo:List[] = [
    {
     id: 1,
     title: 'comprare i biglietti',
     completed: true
    }
   ];

  arrayCompletati:List[] = []


 completa():void{
   this.completed = true;

   this.arrayCompletati = this.todo.filter( (e: { completed: boolean; }) => e.completed == true);
 }

aggiungi(){
    let titolo = this.input
    let nuovaLista = new List(this.id, titolo, this.completed);
    this.todo.push(nuovaLista)
  }

  nascondi(){
    this.active = !this.active
  }

  removeTodo(){
    if (this.selected == true) {

    }
  }
}
