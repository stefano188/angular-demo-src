import { Component, OnInit } from '@angular/core';
import { DemoHttpService } from 'src/app/services/demo-http.service';
import { AppError } from 'src/app/models/app-error';
import { BadRequest } from 'src/app/models/bad-request';
import { NotFound } from 'src/app/models/not-found';

@Component({
  selector: 'app-demo-http',
  templateUrl: './demo-http.component.html',
  styleUrls: ['./demo-http.component.css']
})
export class DemoHttpComponent implements OnInit {

  posts = [];

  constructor(private postService: DemoHttpService) { }

  ngOnInit() {
    this.popuplatePosts();
  }

  popuplatePosts() {
    this.postService.getAll()
    .subscribe(
      result => this.posts = result, 
      error => this.handleError(error)
      );
  }

  addPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';

    // optimistic update: add post before http response
    this.posts.splice(0,0, post);

    this.postService.create(post)
      .subscribe(
        newPost => {
          console.log('create result', newPost);
          console.log('result["id"]' , newPost['id']);
        
          post['id'] = newPost['id'];
          console.log('added post', post);
          // pessimistic update: add post after http response
          // this.posts.splice(0,0, post);
      },
        error => {
          this.handleError(error);
          this.posts.splice(0,1);
        })
  }

  updatePost(post) {
    this.postService.update(post, { isRead: true })
      .subscribe(
        updatedPost => {
          post['updated'] = updatedPost['updated'];
        },
        error => this.handleError(error))
  }

  deletePost(post) {
    // optimistic delete: delete post before http response
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post)
      .subscribe(
        deletedPost => console.log(deletedPost), 
        error => {
          // rollback delete if any error occurs
          this.posts.splice(index, 0, post);
          console.log('rollback on post', post);

          this.handleError(error);
        })
  }

  private handleError(error) {
    if (error instanceof BadRequest) {
      alert('Bad Request: ');
    } else if (error instanceof NotFound) {
      alert('Not Found. This post does not exist: ');
    } else {
      alert('Unexpected error occured: ' + (error as any).originalError.message)
    }
    console.log(error);
  }
}
