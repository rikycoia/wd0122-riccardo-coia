import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Class } from '../class';
import { CrudService } from '../crud.service';
import { Ibooks } from '../ibooks';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  closeResult!: string;
  id!: number 
  
  constructor(private httpClient: HttpClient, private modalService: NgbModal, private crudsrt:CrudService) { }

  

  ngOnInit(): void {
    this.getposts()
    
  }
  books:Ibooks[] = []

  bookmodificato:Ibooks[] = [
  ]

  getposts(){
    this.crudsrt.getposts().subscribe((res) =>{
    this.books = res
    })
  }

  openupdate(book:Ibooks){
    this.visible = true
    this.id = book.id!
    this.title = book.title
    this.body = book.body


  }

  modifica(){
    this.crudsrt.modificapost(this.id,{body:this.body,title:this.title}).subscribe((res) =>{
      console.log(res);
      this.getposts()

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'il post e stato modificato con successo',
        showConfirmButton: false,
        timer: 1500
      })

   })
  }


  delete(id:number):void{

    this.crudsrt.removepost(id).subscribe((res) =>{
      let index = this.books.filter((book) => book.id !== id)
      this.books = index
      console.log(res)

      

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'il post e stato eliminato con successo',
        showConfirmButton: false,
        timer: 1500
      })
    } )

  }

  visible = false
  visible2 = false

  
  title:string = ''
  body:string = ''

  create(){

    this.crudsrt.aggiungipost({title:this.title, body:this.body}).subscribe( (res) => {
      console.log(res)
      res = this.books
      this.title = ''
      this.body = ''
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'nuovo post creato con successo',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  

}
