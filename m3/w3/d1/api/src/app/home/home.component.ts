import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  favCounter = 0

  photos:Photo[] = [];

  constructor(private photoSrv:PhotoService) { }

  ngOnInit(): void {
    this.photoSrv.getPhotos().subscribe((res) =>{
        console.log(res);

        this.photos = res.slice(0, 10)
    })
  }

delete(id:number)
{
  this.photoSrv.deletePhotos(id).subscribe(res =>{
    console.log("delete",res);
    this.photos = res.slice(0, 10)

  })

  this.photoSrv.favSubject.subscribe(res => {
    this.favCounter = res
  })
}

  like() {
    this.photoSrv.addFav()

  }

}
