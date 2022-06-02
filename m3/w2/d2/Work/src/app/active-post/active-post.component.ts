import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { getPosts } from '../post.service';


@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {


  posts!: Post[]

  constructor() {
    getPosts()
    .then(res => {
      this.posts = res['filter']((p:Post) => p.active)
    })
  }

  ngOnInit(): void {}

}

