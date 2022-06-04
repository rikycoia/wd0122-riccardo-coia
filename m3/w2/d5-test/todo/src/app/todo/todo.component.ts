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

  arrayCompletati!: List[];




  aggiungi(){
    let titolo = this.input
    let nuovaLista = new List(this.id, titolo, this.completed);
    this.todo.push(nuovaLista)
  }

  completa(){
    let c = this.completed
    this.completed = true;

    this.arrayCompletati.filter(c => this.completed == true)}

}
