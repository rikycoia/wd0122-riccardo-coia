import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
lista: string [] = ["test1","test2","test3","test4"]
giorni: string [] = ["lunedi","martedi","mercoledi","giovedi","venerdi","sabato","domenica"]

  constructor() { }

  ngOnInit(): void {
  }

}
