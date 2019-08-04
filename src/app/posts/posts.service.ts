import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PostService {
  private postServicePosts: Post[] = [];
  private postServicePostUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.postServicePosts];
  }

  getPostUpdateListener() {
    return this.postServicePostUpdated.asObservable();
  }

  addPosts(title: string, content: string) {
    const post: Post = {title: (title), content: (content)};
    this.postServicePosts.push(post);
    this.postServicePostUpdated.next([...this.postServicePosts]);
  }
}
