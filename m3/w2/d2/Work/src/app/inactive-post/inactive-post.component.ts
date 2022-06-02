import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { getPosts } from '../post.service'

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent implements OnInit {
  posts: any;

  constructor() {
    getPosts()
    fetch("../../assets/db.json")
    .then(res => res.json())
    .then(res => {
      this.posts = res.filter((p:Post) => !p.active)
    })
  }

  ngOnInit(): void {

  }
}


