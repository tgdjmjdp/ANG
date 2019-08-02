import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   storePosts = [];

   onAdded(post) {
     this.storePosts.push(post);
   }

}
