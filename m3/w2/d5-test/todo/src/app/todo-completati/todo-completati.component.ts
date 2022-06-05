import { Component, OnInit } from '@angular/core';
import { List } from '../class/todo';
import { Todoservice } from '../service/todo.service';


@Component({
  selector: 'app-todo-completati',
  templateUrl: './todo-completati.component.html',
  styleUrls: ['./todo-completati.component.scss']
})
export class TodoCompletatiComponent implements OnInit {

  constructor( private todolist: Todoservice) { }


  arrayCompletati!: List[];

  id: number = 1;
  title:string = "";
  completed= false;

  ngOnInit(): void {

    let c = this.completed
      this.completed = true;

      this.arrayCompletati.filter(c => this.completed == true)

  }
}




