import { Injectable } from '@angular/core';
import { List } from '../class/todo';

@Injectable({
  providedIn: 'root'
})
export class Todoservice {

  constructor() { }


    input:string = ''

    todo:List[] = [
     {
      id: 1,
      title: 'comprare i biglietti',
      completed: false
     }
    ];



    addTodo(cose:List):void{
      this.todo.push(cose);
    };


    getTodoById(){};


    editTodo(){}

    cancelTodo(){}



  }

