import { Itodolist } from "../interface/todo";

export class List implements Itodolist{
  id: number;
  title: string;
  completed: boolean;

  constructor(id: number, title: string, completed: boolean) {
    this.id = Math.floor(Math.random() * 100);
    this.title = title;
    this.completed = completed;
  }
}
