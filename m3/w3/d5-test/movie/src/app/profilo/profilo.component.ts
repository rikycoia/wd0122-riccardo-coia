import { Component, OnInit } from '@angular/core';
import { ProfiloClass } from './profilo-class';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  movieInput:string = ''

  arrayMovie:ProfiloClass[] = []


addMovies():void{
  let newMovie = new ProfiloClass(this.movieInput)

  this.arrayMovie.push(newMovie)
}

}
