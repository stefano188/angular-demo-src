import { Component, OnInit } from '@angular/core';
import { DemoHttpService } from 'src/app/services/demo-http.service';
import { AppError } from 'src/app/models/app-error';

@Component({
  selector: 'app-demo-http',
  templateUrl: './demo-http.component.html',
  styleUrls: ['./demo-http.component.css']
})
export class DemoHttpComponent implements OnInit {

  posts = [];

  constructor(private postService: DemoHttpService) { }

  ngOnInit() {
    this.postService.getAll()
      .subscribe(
        result => this.posts = result, 
        error => {
          if (error instanceof AppError) {
            alert('Unexpected error occured: ' + (error as any).originalError.message)
          }
          console.log(error)
        });
    /* 
    this.postService.getAll()
      .subscribe(result => {
      console.log('results', result);
      // this.posts = result;
      // console.log('posts', this.posts);
    });
    */
  }

}
