import {Component} from '@angular/core';
import {Validator} from 'class-validator/validation/Validator';
import {Post} from './validation/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';

  constructor() {
    const post: Post = new Post('', '', '');

    /* ↓↓↓↓ don't edit!! ↓↓↓↓ */
    new Validator().validate(post).then(
      ( errors: any ) => {
        if ( errors.length > 0 ) {
          this.message = errors[0];
        } else {
          this.message = 'Awesome!! complete validation!!';
        }
      }
    );
    /* ↑↑↑↑ don't edit!! ↑↑↑↑ */
  }
}
