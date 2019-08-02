import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  /* posts = [
    {
      title: 'First Title', content: 'This is the first content'
    },
    {
      title: 'Second Title', content: 'This is the second content'
    },
    {
      title: 'Third Title', content: 'This is the third content'
    }
  ]; */

  @Input() posts = [];
  constructor() { }

  ngOnInit() {
  }

}
